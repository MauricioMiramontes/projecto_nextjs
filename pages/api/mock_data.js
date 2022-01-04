const MOCK_DATA = [
  {
    id: 1,
    name: "John Doe",
    age: 30,
  },
  {
    id: 2,
    name: "Jane Doe",
    age: 25,
  },
  {
    id: 3,
    name: "Jack Doe",
    age: 35,
  },
];

export default function handler(req, res) {
  res.status(200).json(MOCK_DATA);
}
