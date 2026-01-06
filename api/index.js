export default async function handler(req, res) {
  res.status(200).json({
    name: "cvsm-snowflake-vercel",
    version: "1.0.0",
    status: "active",
    description: "CV SM Snowflake MCP Server"
  });
}
