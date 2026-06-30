export default function LogoMark(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path d="M12 2a8 8 0 0 0-8 8c0 5 4 9 8 12 4-3 8-7 8-12a8 8 0 0 0-8-8z" />
      <path d="M12 8a2 2 0 1 0 0 4 2 2 0 0 0 0-4z" />
      <path d="M6 10h.01M18 10h.01" strokeWidth="2.5" />
    </svg>
  );
}
