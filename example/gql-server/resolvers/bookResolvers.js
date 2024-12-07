export const books = [
  { id: '1', title: 'The Great Gatsby', author: 'F. Scott Fitzgerald' },
  { id: '2', title: '1984', author: 'George Orwell' }
];

export const bookResolvers = {
  Query: {
    books: () => books,
  },
  Mutation: {
    addBook: (_, { title, author }) => {
      const newBook = {
        id: String(books.length + 1),
        title,
        author,
      };
      books.push(newBook);
      return newBook;
    },
  },
};
