import { useState } from "react";
import lpSolver from "javascript-lp-solver";
import { Box, Button, Container, TextField, Typography } from "@mui/material";

function App() {
  const [numProducts, setNumProducts] = useState(0);
  const [costs, setCosts] = useState({});
  const [availability, setAvailability] = useState(0);
  const [result, setResult] = useState(null);

  const handleProductCountChange = (event) => {
    const count = parseInt(event.target.value);
    setNumProducts(count);
    setCosts({});
  };

  const handleCostChange = (productId, cost) => {
    setCosts({ ...costs, [productId]: parseFloat(cost) });
  };

  const handleAvailabilityChange = (event) => {
    setAvailability(parseFloat(event.target.value));
  };

  const solveLinearProgram = () => {
    const variables = {};
    for (let i = 1; i <= numProducts; i++) {
      variables[`x${i}`] = {
        cost: costs[`product${i}`],
        availability: Math.floor(Math.random() * 10),
      };
    }

    const constraints = {
      availability: { max: availability },
    };

    const result = lpSolver.Solve({
      optimize: "cost",
      opType: "min",
      constraints,
      variables,
    });
    console.log(result);
    setResult(result);
  };

  return (
    <Container
      sx={{
        width: "40%",
        padding: "1rem",
        border: "1px solid black",
        boxShadow: "10px 10px 5px lightgrey",
        borderRadius: "5px",
        backggroundColor: "white",
        textAlign: "center",
      }}
    >
      <Typography variant="h4" component="h1">
        Planificación de Producción
      </Typography>

      <TextField
        type="number"
        variant="filled"
        label="Número de productos:"
        onChange={handleProductCountChange}
        sx={{ marginTop: 2 }}
      />

      {numProducts > 0 && (
        <Box>
          <Typography variant="h6" component="h3" sx={{ marginTop: 2 }}>
            Costos de producción:
          </Typography>
          {Array.from({ length: numProducts }, (_, i) => (
            <div key={i}>
              <TextField
                label={`Producto ${i + 1}`}
                type="number"
                variant="filled"
                sx={{ marginTop: 2, width: "100%" }}
                onChange={(e) =>
                  handleCostChange(`product${i + 1}`, e.target.value)
                }
              />
            </div>
          ))}

          <TextField
            label="Disponibilidad de materias primas:"
            variant="filled"
            type="number"
            onChange={handleAvailabilityChange}
            sx={{ marginTop: 2, width: "100%" }}
          />

          <Button
            variant="contained"
            onClick={solveLinearProgram}
            sx={{ mt: 4 }}
          >
            Resolver
          </Button>
        </Box>
      )}
      {result?.feasible && (
        <Box>
          <Typography variant="h6" component="h3">
            Asignación óptima de materias primas:
          </Typography>
          {Object.keys(result.result).map((variable) => (
            <p key={variable}>
              {variable}: {result.result[variable]}
            </p>
          ))}
          <Typography variant="body1" component="p">
            Costo total de producción: {result.result}
          </Typography>
        </Box>
      )}
      {result && !result?.feasible && (
        <Typography variant="body1" component="p">
          No se encontró una solución factible.
        </Typography>
      )}
    </Container>
  );
}

export default App;
