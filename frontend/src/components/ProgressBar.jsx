function ProgressBar({ progress }) {
  return (
    <div>
      <div
        style={{
          width: `${progress}%`,
          height: "8px",
          backgroundColor: "#333",
        }}
      />
    </div>
  );
}

export default ProgressBar;
