"use client"

const NumberButton = () => {
    const text = "0720175620";

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(text);
      alert("Copied!");
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  return (
    <button onClick={handleCopy} className="block cursor-pointer">{"0720175620"}</button>
  )
}

export default NumberButton