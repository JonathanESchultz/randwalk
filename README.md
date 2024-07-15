<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Hand-Drawn Live Updating Line Graph</title>
    <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/roughjs/bundled/rough.esm.js"></script>
    <style>
        body {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            margin: 0;
            background-color: #f5f5f5;
        }
        canvas {
            max-width: 600px;
            width: 100%;
        }
    </style>
</head>
<body>
    <canvas id="liveChart"></canvas>

    <script src="app.js"></script>
</body>
</html>
