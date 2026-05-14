
function Sseperator() {
  return (
    <div>
      {/* Background glow */}
      <div className="absolute -top-20 left-1/2 h-40 w-96 -translate-x-1/2 rounded-full bg-[#3F0071]/40 blur-3xl" />

      {/* Hairline */}
      <div
        className="absolute top-0 left-1/2 h-px w-3/5 -translate-x-1/2"
        style={{
          background:
            "linear-gradient(to right, transparent, #610094, transparent)",
        }}
      />
    </div>
  )
}

export default Sseperator