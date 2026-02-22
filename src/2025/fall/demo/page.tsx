const demoPresentationLink =
  "https://gtvault-my.sharepoint.com/:v:/g/personal/tbahbouche3_gatech_edu/ERZSTSkHvYNOvWsbt7dTjr4BccwtN4UQXSZ6Js2xnvy5Jg?nav=eyJyZWZlcnJhbEluZm8iOnsicmVmZXJyYWxBcHAiOiJPbmVEcml2ZUZvckJ1c2luZXNzIiwicmVmZXJyYWxBcHBQbGF0Zm9ybSI6IldlYiIsInJlZmVycmFsTW9kZSI6InZpZXciLCJyZWZlcnJhbFZpZXciOiJNeUZpbGVzTGlua0NvcHkifX0&e=LhnPF8";

export default function DemoPage() {
  return (
    <div>
      <h1 className="mb-4 text-2xl font-semibold underline">
        <a
          href={demoPresentationLink}
          className="text-blue-600 underline"
          target="_blank"
          rel="noreferrer"
        >
          Project Demo
        </a>
      </h1>
    </div>
  );
}
