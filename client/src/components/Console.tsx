interface ConsoleLine {
  type: 'command' | 'info' | 'success' | 'option' | 'option-selected' | 'option-purple' | 'text';
  text: string;
}

interface ConsoleProps {
  lines: ConsoleLine[];
  className?: string;
}

export default function Console({ lines, className = "" }: ConsoleProps) {
  return (
    <div className={`console-effect ${className}`}>
      {lines.map((line, index) => {
        if (line.type === 'command') {
          return (
            <div key={index} className="console-line">
              <span className="console-prompt">$</span>
              <span className="console-text">{line.text}</span>
            </div>
          );
        } else if (line.type === 'info') {
          return (
            <div key={index} className="console-line">
              <span className="console-prompt">[*]</span>
              <span className="console-text">{line.text}</span>
            </div>
          );
        } else if (line.type === 'success') {
          return (
            <div key={index} className="console-line">
              <span className="console-prompt">[*]</span>
              <span className="console-text text-glow-green">{line.text}</span>
            </div>
          );
        } else if (line.type === 'option') {
          return (
            <div key={index} className="pl-4 mb-2">
              <span className="console-text">{line.text}</span>
            </div>
          );
        } else if (line.type === 'option-selected') {
          return (
            <div key={index} className="pl-4 mb-2">
              <span className="console-text text-glow-green">&gt; {line.text}</span>
            </div>
          );
        } else if (line.type === 'option-purple') {
          return (
            <div key={index} className="pl-4 mb-2">
              <span className="console-text text-glow-purple">&gt; {line.text}</span>
            </div>
          );
        } else {
          return (
            <div key={index} className="console-line">
              <span className="console-text">{line.text}</span>
            </div>
          );
        }
      })}
    </div>
  );
}
