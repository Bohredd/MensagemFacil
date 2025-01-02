import { FaWhatsapp } from "react-icons/fa";

const ShareButton = () => {
  const shareMessage = () => {
    const message = "Check out this amazing website! https://example.com";
    const url = `https://wa.me/?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  return (
    <button
      style={{
        display: "flex",
        alignItems: "center",
        backgroundColor: "#25D366",
        color: "#fff",
        border: "none",
        padding: "10px 20px",
        borderRadius: "5px",
        cursor: "pointer",
        fontSize: "16px",
      }}
      onClick={shareMessage}
    >
      <FaWhatsapp style={{ marginRight: "10px" }} />
      Share on WhatsApp
    </button>
  );
};

export default ShareButton;
