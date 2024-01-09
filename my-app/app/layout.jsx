"use client";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Inter } from 'next/font/google'
import './globals.css'

//==========================================================
// Student Number : S10262791
// Student Name : Asyiq Nuruddin
//==========================================================
function BasicExample() {
  return (
    <Navbar bg="dark" data-bs-theme="dark">
    <Container>
      <Navbar.Brand href="/">CSS</Navbar.Brand>
      <Nav className="me-auto">
        <Nav.Link href="/">Home</Nav.Link>
        <Nav.Link href="/about">About</Nav.Link>
        <Nav.Link href="/namelist">Namelist</Nav.Link>
      </Nav>
    </Container>
  </Navbar>
  );
}


const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <BasicExample/>
        {children}
      </body>
    </html>
    
  )
}