export default function ServerClockInfo() {
  const ServerTime = new Date().toLocaleTimeString();

  return (
    <div>
      <h1>
        Server Time:{ServerTime}
        <p className="text-sm text-gray-600 mt-2">
        this above is the server time and wont update withpout refresh
      </p>
      </h1>
    </div>
  );
}
