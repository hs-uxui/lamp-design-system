const SIDEBAR_MENU_LIST = [
  {
    id: 'todo',
    menu: 'TODO List',
    icon: 'checklist',
  },
  {
    id: 'analysis',
    menu: '분석',
    icon: 'timeline',
    children: [
      { id: 'analysis-requirements', menu: '요구사항' },
      { id: 'analysis-business', menu: '업무분석' },
      { id: 'analysis-view', menu: '통합 View' },
      { id: 'analysis-flow', menu: '업무흐름' },
      { id: 'analysis-trace', menu: '요구추적' },
    ],
  },
  {
    id: 'design',
    menu: '설계&구현',
    icon: 'account_tree',
    children: [
      { id: 'design-table', menu: '테이블' },
      { id: 'design-function', menu: '화면(Function)' },
      { id: 'design-interface', menu: 'Interface' },
    ],
  },
  {
    id: 'target-system',
    menu: 'Target 시스템',
    icon: 'settings',
    children: [
      { id: 'target-create', menu: 'Target 시스템 생성' },
      { id: 'target-scope', menu: '범위 설정' },
      { id: 'target-menu', menu: 'Target Menu' },
      { id: 'target-config', menu: '시스템 설정' },
      { id: 'target-keyword', menu: '예약어' },
      { id: 'target-manual', menu: 'Target 시스템 매뉴얼' },
    ],
  },
  {
    id: 'test',
    menu: '테스트',
    icon: 'fact_check',
    children: [
      {
        id: 'test-auto',
        menu: '자동테스트',
        icon: 'keyboard_arrow_right',
        children: [
          {
            id: 'test-auto-unit',
            menu: '단위테스트',
            icon: 'keyboard_arrow_right',
            children: [
              { id: 'test-auto-unit-design', menu: '테스트 설계' },
              { id: 'test-auto-unit-plan', menu: '테스트 계획' },
              { id: 'test-auto-unit-result', menu: '테스트 결과' },
              { id: 'test-auto-unit-progress', menu: '테스트 진척' },
            ],
          },
          { id: 'test-auto-business', menu: '업무테스트' },
          { id: 'test-auto-integration', menu: '통합테스트' },
          { id: 'test-auto-settings', menu: '자동테스트 설정' },
        ],
      },
      {
        id: 'test-manual',
        menu: '수동테스트',
        icon: 'keyboard_arrow_right',
        children: [
          { id: 'test-manual-unit-design', menu: '단위 테스트 설계' },
          { id: 'test-manual-unit-plan', menu: '단위 테스트 계획' },
          { id: 'test-manual-unit', menu: '단위 테스트' },
          { id: 'test-manual-integration-design', menu: '통합 테스트 설계' },
          { id: 'test-manual-integration', menu: '통합 테스트' },
          { id: 'test-manual-integration-progress', menu: '통합 테스트 진척' },
        ],
      },
    ],
  },
  {
    id: 'project',
    menu: '프로젝트',
    icon: 'assignment',
    children: [
      { id: 'project-schedule-edit', menu: '프로젝트 일정계획 편집(개발중)' },
      { id: 'project-progress', menu: '프로젝트 진척' },
      {
        id: 'project-monitoring',
        menu: '모니터링',
        icon: 'keyboard_arrow_right',
        children: [
          { id: 'project-monitoring-trace', menu: '요구사항 추적' },
          { id: 'project-monitoring-weekly', menu: '주간업무보고' },
          { id: 'project-monitoring-monthly', menu: '월간업무보고' },
        ],
      },
      {
        id: 'project-meeting',
        menu: '회의관리',
        icon: 'keyboard_arrow_right',
        children: [
          { id: 'project-meeting-request', menu: '회의 요청' },
          { id: 'project-meeting-progress', menu: '회의 진행' },
          { id: 'project-meeting-result', menu: '회의 결과' },
        ],
      },
      { id: 'project-notice', menu: '공지사항' },
      { id: 'project-board', menu: '자유게시판' },
      {
        id: 'project-target-info',
        menu: '목표 시스템 기준정보',
        icon: 'keyboard_arrow_right',
        children: [
          {
            id: 'project-target-org',
            menu: '목표 시스템 조직',
            icon: 'keyboard_arrow_right',
            children: [
              { id: 'project-target-org-company', menu: '회사' },
              { id: 'project-target-org-department', menu: '부서' },
              { id: 'project-target-org-role', menu: '역할' },
            ],
          },
          { id: 'project-target-category', menu: '분류' },
          {
            id: 'project-target-library',
            menu: 'Library',
            icon: 'keyboard_arrow_right',
            children: [
              { id: 'project-target-library-session', menu: '세션 변수' },
              {
                id: 'project-target-library-message',
                menu: 'Message Code',
                icon: 'keyboard_arrow_right',
                children: [
                  { id: 'project-target-library-message-system', menu: 'System Message' },
                  { id: 'project-target-library-message-user', menu: 'User Message' },
                  { id: 'project-target-library-message-locale', menu: '다국어 설정' },
                ],
              },
              { id: 'project-target-library-theme', menu: '화면(Function) 테마' },
              { id: 'project-target-library-api', menu: 'Rest API Setting' },
            ],
          },
          { id: 'project-target-milestone', menu: 'Milestone' },
          { id: 'project-target-fp', menu: 'Function Points' },
          { id: 'project-target-standard-app', menu: '표준 응용시스템' },
          { id: 'project-target-standard-doc', menu: '표준 산출물 ID' },
        ],
      },
      { id: 'project-external-account', menu: '외부시스템 계정관리' },
      { id: 'project-info', menu: '프로젝트 정보' },
      { id: 'project-user', menu: '프로젝트 사용자' },
      { id: 'project-schedule', menu: '프로젝트 일정계획' },
      {
        id: 'project-sap',
        menu: 'SAP 관리',
        icon: 'keyboard_arrow_right',
        children: [{ id: 'project-sap-screen', menu: 'SAP 화면 항목 관리' }],
      },
      {
        id: 'project-collab',
        menu: '협업',
        icon: 'keyboard_arrow_right',
        children: [{ id: 'project-collab-lock', menu: '산출물 Lock' }],
      },
    ],
  },
  {
    id: 'lamp7',
    menu: 'LAMP7 매뉴얼',
    icon: 'book_2',
    children: [
      { id: 'lamp7-menu-manual', menu: '메뉴별 사용 매뉴얼' },
      { id: 'lamp7-use-case', menu: '사용 사례 가이드' },
      { id: 'lamp7-reference', menu: 'Reference 매뉴얼' },
    ],
  },
  {
    id: 'project-import-export',
    menu: '프로젝트 내보내기/가져오기',
    icon: 'drive_folder_upload',
  },
];

// Icon 생성
function createIcon(name) {
  const icon = document.createElement('span');
  icon.className = 'material-symbols-rounded';
  icon.setAttribute('aria-hidden', 'true');
  icon.innerText = name;
  return icon;
}

// Menu Button 생성
function createMenuButton(item, depth) {
  const button = document.createElement('button');
  button.className = 'menu-button';
  button.type = 'button';
  button.setAttribute('aria-expanded', 'false');

  if (item.icon) {
    button.appendChild(createIcon(item.icon));
  }

  const label = document.createElement('span');
  label.className = 'menu-button-label';
  label.innerText = item.menu;
  button.appendChild(label);

  if (depth === 1 && item.children) {
    button.appendChild(createIcon('add'));
  }

  return button;
}

// Sub Menu 토글
function toggleSubMenu(button, subMenu, endIcon) {
  const expanded = button.getAttribute('aria-expanded') === 'true';
  button.setAttribute('aria-expanded', String(!expanded));
  button.classList.toggle('is-open');
  subMenu.classList.toggle('is-open');

  if (endIcon) {
    endIcon.innerText = expanded ? 'add' : 'remove';
  }
}

// 메뉴 생성
function createMenu(menuList, depth = 1) {
  const ul = document.createElement('ul');

  menuList.forEach((item) => {
    const li = document.createElement('li');
    li.classList.add(`depth-${depth}`);

    const button = createMenuButton(item, depth);
    li.appendChild(button);

    if (item.children) {
      const subMenu = createMenu(item.children, depth + 1);
      subMenu.classList.add('sub-menu');
      li.appendChild(subMenu);

      const endIcon = button.querySelector('.material-symbols-rounded:last-child');
      button.addEventListener('click', (e) => {
        e.stopPropagation();
        const sidebar = document.querySelector('.sidebar');

        if (sidebar.classList.contains('is-closed') && depth === 1) {
          resetOtherMenus(subMenu, true);
        }

        toggleSubMenu(button, subMenu, endIcon);
      });
    } else {
      // 서브메뉴 없는 경우
      button.addEventListener('click', (e) => {
        e.stopPropagation();

        document.querySelectorAll('.menu-button.is-active').forEach((btn) => btn.classList.remove('is-active'));
        button.classList.add('is-active');

        const depth1MenuButtons = document.querySelectorAll('.depth-1');

        depth1MenuButtons.forEach((btn) => btn.classList.remove('is-active'));
        button.closest('.depth-1')?.classList.add('is-active');
      });
    }

    ul.appendChild(li);
  });

  return ul;
}

const sidebarContainer = document.querySelector('.sidebar-menu');
sidebarContainer.appendChild(createMenu(SIDEBAR_MENU_LIST));

const toggleSidebarButton = document.querySelector('.sidebar-toggle');
toggleSidebarButton.addEventListener('click', () => {
  const sidebar = document.querySelector('.sidebar');
  sidebar.classList.toggle('is-closed');
});
