let sin = Math.sin;
let cos = Math.cos;



function rotateAroundXAxis(a) {
    return [
         1,       0,        0,     0,
         0,  cos(a),  -sin(a),     0,
         0,  sin(a),   cos(a),     0,
         0,       0,        0,     1
    ];
  }
  
  function rotateAroundYAxis(a) {
    return [
       cos(a),   0, sin(a),   0,
            0,   1,      0,   0,
      -sin(a),   0, cos(a),   0,
            0,   0,      0,   1
    ];
  }
  
  function rotateAroundZAxis(a) {
    return [
      cos(a), -sin(a),    0,    0,
      sin(a),  cos(a),    0,    0,
           0,       0,    1,    0,
           0,       0,    0,    1
    ];
  }
  

  function multiplyMatrixAndPoint(matrix, point, around) {


    


    let c0r0 = matrix[ 0], c1r0 = matrix[ 1], c2r0 = matrix[ 2], c3r0 = matrix[ 3];
    let c0r1 = matrix[ 4], c1r1 = matrix[ 5], c2r1 = matrix[ 6], c3r1 = matrix[ 7];
    let c0r2 = matrix[ 8], c1r2 = matrix[ 9], c2r2 = matrix[10], c3r2 = matrix[11];
    let c0r3 = matrix[12], c1r3 = matrix[13], c2r3 = matrix[14], c3r3 = matrix[15];
  
    let x = point.X-around.X;
    let y = point.Y- around.Y;
    let z = point.Z - around.Z;
    let w = point.A;
  
    let resultX = (x * c0r0) + (y * c0r1) + (z * c0r2) + (w * c0r3);
    let resultY = (x * c1r0) + (y * c1r1) + (z * c1r2) + (w * c1r3);
    let resultZ = (x * c2r0) + (y * c2r1) + (z * c2r2) + (w * c2r3);
    let resultW = (x * c3r0) + (y * c3r1) + (z * c3r2) + (w * c3r3);
    return  new Verticle(resultX+around.X, resultY+around.Y, resultZ+around.Z, resultW);
  }