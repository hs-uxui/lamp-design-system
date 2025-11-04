const ALLOWED_EXTENSIONS = [
  'txt',
  'doc',
  'docx',
  'ppt',
  'pptx',
  'hwp',
  'hwpx',
  'xls',
  'xlsx',
  'pdf',
  'zip',
  'alz',
  'jpg',
  'jpeg',
  'gif',
  'png',
  'bmp',
  'mht',
  'catpart',
  'catdrawing',
  'eml',
];

let pendingFiles = [];
let fileIdCounter = 0;
const $alert = $('.file-upload-alert');

function isAllowedFile(fileName) {
  const ext = fileName.split('.').pop().toLowerCase();
  return ALLOWED_EXTENSIONS.includes(ext);
}

// 모달 제어
function showAlert(message) {
  $alert.find('.alert-description').text(message);
  $alert.addClass('active');
}

function hideAlert() {
  $alert.removeClass('active');
}

$alert.on('click', '.alert-close', function () {
  hideAlert();
});

function formatFileSize(bytes) {
  if (bytes === 0) return '0 Bytes';
  const k = 1024,
    sizes = ['Bytes', 'KB', 'MB', 'GB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
}

function createPreviewCard(file, id, imgSrc) {
  return `
    <li data-file-id="${id}">
      <article class="upload-preview-item">
        <button 
          class="upload-preview-remove-btn icon-btn sm secondary ghost" 
          type="button" 
          data-id="${id}" 
          title="삭제" 
          aria-label="파일 제거">
          <span class="material-symbols-rounded" aria-hidden="true">close</span>    
        </button>
        <div class="upload-preview-thumbnail">
          ${imgSrc ? `<img src="${imgSrc}" alt="${file.name}"/>` : `<span class="material-symbols-rounded">docs</span>`}
        </div>
        <div class="upload-preview-details">
          <span class="upload-preview-name">${file.name}</span>
          <span class="upload-preview-size">${formatFileSize(file.size)}</span>
          <div class="upload-preview-progress">
            <div class="upload-preview-progress-bar" id="progress-bar-${id}" style="width: 0%"></div>
          </div>
        </div>
      </article>
    </li>
  `;
}

$('#file-upload-input').fileupload({
  url: '/', // ✅ LAMP7 서버 URL 교체
  dataType: 'json',
  dropZone: $('.file-upload-dropzone'),
  autoUpload: false,
  add: function (e, data) {
    const files = data.files;
    const validFiles = files.filter((file) => {
      if (isAllowedFile(file.name)) {
        return true;
      } else {
        showAlert(`지원하지 않는 파일 형식입니다: ${file.name}`);
        return false;
      }
    });

    if (validFiles.length === 0) return;

    const $ul = $('.file-preview-list');

    validFiles.forEach((file) => {
      const id = `file-${fileIdCounter++}`;

      // 새로운 data 객체 복사
      const newData = $.extend(true, {}, data);
      newData.files = [file];

      pendingFiles.push({ id, data: newData, file });

      if (file.type.startsWith('image/')) {
        const reader = new FileReader();
        reader.onload = function (ev) {
          $ul.append(createPreviewCard(file, id, ev.target.result));
        };
        reader.readAsDataURL(file);
      } else {
        $ul.append(createPreviewCard(file, id, null));
      }
    });
  },
  progress: function (e, data) {
    const target = pendingFiles.find((f) => f.data === data);
    if (target) {
      const progress = parseInt((data.loaded / data.total) * 100, 10);
      $(`#progress-bar-${target.id}`).css('width', `${progress}%`);
    }
  },
  done: function (e, data) {
    const target = pendingFiles.find((f) => f.data === data);
    if (target) {
      $(`#progress-bar-${target.id}`).css('width', '100%');
    }
  },
  fail: function (e, data) {
    const target = pendingFiles.find((f) => f.data === data);
    if (target) {
      $(`#progress-bar-${target.id}`).css('width', '0%');
    }
  },
  dragover: function () {
    $('.file-upload-dropzone').addClass('drag-over');
  },
  drop: function () {
    $('.file-upload-dropzone').removeClass('drag-over');
  },
  dragleave: function () {
    $('.file-upload-dropzone').removeClass('drag-over');
  },
});

function startFileUpload() {
  pendingFiles.forEach((f) => {
    f.data.submit();
  });
}

$(document).on('click', '.upload-preview-remove-btn', function () {
  const id = $(this).data('id');
  $(`li[data-file-id="${id}"]`).remove();
  pendingFiles = pendingFiles.filter((f) => f.id !== id);
});

window.startFileUpload = startFileUpload;
