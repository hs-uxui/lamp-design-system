const Grid = tui.Grid;

const instance = new Grid({
  el: document.getElementById('grid'), // Container element
  columns: [
    {
      header: 'Name',
      name: 'name',
      sortable: true,
    },
    {
      header: 'Artist',
      name: 'artist',
      sortable: true,
    },
    {
      header: 'Release',
      name: 'release',
      sortable: true,
    },
    {
      header: 'Genre',
      name: 'genre',
      sortable: true,
    },
  ],
  data: [
    {
      name: 'Beautiful Lies',
      artist: 'Birdy',
      release: '2016.03.26',
      genre: 'Pop',
    },
    {
      name: 'X',
      artist: 'Ed Sheeran',
      release: '2014.06.20',
      genre: 'Pop',
    },
    {
      name: 'Moves Like Jagger',
      artist: 'Maroon 5',
      release: '2011.06.21',
      genre: 'Pop',
    },
    {
      name: 'A Head Full of Dreams',
      artist: 'Coldplay',
      release: '2015.12.04',
      genre: 'Rock',
    },
    {
      name: '21',
      artist: 'Adele',
      release: '2011.01.19',
      genre: 'Pop',
    },
  ],
  sortable: true,
  filter: true,
  selection: {
    type: 'checkbox',
    header: true,
  },
  pageOptions: {
    useClient: true,
    perPage: 10,
  },
});

instance.on('sort', (ev) => {
  console.log('정렬됨:', ev);
});

instance.on('selection', (ev) => {
  console.log('선택됨:', ev);
});
