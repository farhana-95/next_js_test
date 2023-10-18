const sampleData = [
    { id: 1, name: 'User 1', address: 'Address 1'},
    { id: 2, name: 'User 2', address: 'Address 2' },
    { id: 3, name: 'User 3', address: 'Address 3' },
  ];
  
  export default (req, res) => {
    res.status(200).json(sampleData);
  };