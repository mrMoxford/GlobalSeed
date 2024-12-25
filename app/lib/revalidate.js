export default async function handler(req, res) {
    const secret = process.env.CONTENTFUL_WEBHOOK_SECRET;
  
    // Verify webhook secret
    if (req.query.secret !== secret) {
      return res.status(401).json({ message: "Unauthorized" });
    }
  
    try {
      const { sys } = req.body;
  
      // Check the content type of the updated content
      if (sys?.contentType?.sys?.id === "programeCard") {
        // Revalidate pages or data tagged as 'programeCard'
        await res.revalidate("/programs");
        console.log("Revalidated /programs");
      }
  
      return res.status(200).json({ message: "Revalidation complete" });
    } catch (error) {
      console.error("Error during revalidation:", error);
      return res.status(500).json({ message: "Error during revalidation" });
    }
  }
  