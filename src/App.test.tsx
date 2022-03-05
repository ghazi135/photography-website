import React from 'react';
import { render, screen } from '@testing-library/react';
import About from "./component/about/About";
import Contact from "./component/contact/Contact";
import Skill from "./component/skill/Skill";
import Project from "./component/project/Project";

// test('renders learn react link', () => {
//   render(<About />);
//   const linkElement = screen.getByText(/about/i);
//   expect(linkElement).toBeInTheDocument();
// });
// test('render contact component', () => {
//   render(<Contact />);
//   const linkElement = screen.getByText(/contact/i);
//   expect(linkElement).toBeInTheDocument();
// });

test('renders skill component', () => {
  render(<Skill />);
  const linkElement = screen.getByText(/skill/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders project component', () => {
  render(<Project />);
  const linkElement = screen.getByText(/project/i);
  expect(linkElement).toBeInTheDocument();
});
