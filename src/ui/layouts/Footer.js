import React from "react";

export default function Footer() {
  return (
    <footer className="footer">
      <p className="text text--copyright">
        &copy; {new Date().getFullYear()} &nbsp;
        <a
          href="https://github.com/pbokolo"
          target="_blank"
          rel="noreferrer"
          class="text text--owner"
        >
          Pierrot Bokolo
        </a>
        &nbsp;Free of use for learning but don't claim it as your design
      </p>
    </footer>
  );
}
