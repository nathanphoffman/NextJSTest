export default function Home() {

  type hello = string | number

  const a : hello = "hello"

  type IsString<T> = T extends string ? number : boolean
  
  const ss : IsString<string> = 3



  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 dark:bg-black">
      <h1 className="text-4xl font-semibold text-black dark:text-zinc-50">
        Hello, World!
      </h1>
    </div>
  );
}