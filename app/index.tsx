'use dom';

// Remember to import the global.css file in each DOM component.
import '../global.css';

export default function Page() {
  return (
    <div className="flex flex-1 justify-center items-center bg-gray-800">
      <h1 className="text-4xl text-white">Hello, World!</h1>
    </div>
  );
}
