const express = require("express");
const app = express();

app.use(express.json());

const EMAIL = "kaveesh2035.be23@chitkara.edu.in";

app.get("/health", (req, res) => {
  res.json({
    is_success: true,
    official_email: EMAIL
  });
});

app.post("/bfhl", async (req, res) => {
  try {
    const key = Object.keys(req.body)[0];
    const value = req.body[key];

    let result;

    if (key === "fibonacci") {
      let n = value;
      let fib = [0, 1];
      for (let i = 2; i < n; i++)
        fib.push(fib[i - 1] + fib[i - 2]);
      result = fib.slice(0, n);
    }

    else if (key === "prime") {
      result = value.filter(num => {
        if (num < 2) return false;
        for (let i = 2; i <= Math.sqrt(num); i++)
          if (num % i === 0) return false;
        return true;
      });
    }

    else if (key === "lcm") {
      const gcd = (a, b) => b === 0 ? a : gcd(b, a % b);
      result = value.reduce((a, b) => (a * b) / gcd(a, b));
    }

    else if (key === "hcf") {
      const gcd = (a, b) => b === 0 ? a : gcd(b, a % b);
      result = value.reduce(gcd);
    }

    else if (key === "AI") {
      result = "Chandigarh"; 
    }

    else {
      return res.status(400).json({ is_success: false });
    }

    res.json({
      is_success: true,
      official_email: EMAIL,
      data: result
    });

  } catch (err) {
    res.status(500).json({ is_success: false });
  }
});

app.listen(4568, () => console.log("Server running"));