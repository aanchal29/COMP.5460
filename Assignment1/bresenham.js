function assert(a) {
   if (!a) console.log("Assertion failed in bresenham.js "+a);
   return a;
}
   
function plotLine(x0, y0, x1, y1)
{
   var dx =  Math.abs(x1-x0), sx = x0<x1 ? 1 : -1;
   var dy = -Math.abs(y1-y0), sy = y0<y1 ? 1 : -1;
   var err = dx+dy, e2;                                   /* error value e_xy */

   for (;;){                                                          /* loop */
      setPixel(x0,y0);
      if (x0 == x1 && y0 == y1) break;
      e2 = 2*err;
      if (e2 >= dy) { err += dy; x0 += sx; }                        /* x step */
      if (e2 <= dx) { err += dx; y0 += sy; }                        /* y step */
   }
}

function plotEllipse(xm, ym, a, b)
{
   var x = -a, y = 0;           /* II. quadrant from bottom left to top right */
   var e2, dx = (1+2*x)*b*b;                              /* error increment  */
   var dy = x*x, err = dx+dy;                              /* error of 1.step */

   do {
       setPixel(xm-x, ym+y);                                 /*   I. Quadrant */
       setPixel(xm+x, ym+y);                                 /*  II. Quadrant */
       setPixel(xm+x, ym-y);                                 /* III. Quadrant */
       setPixel(xm-x, ym-y);                                 /*  IV. Quadrant */
       e2 = 2*err;                                        
       if (e2 >= dx) { x++; err += dx += 2*b*b; }                   /* x step */
       if (e2 <= dy) { y++; err += dy += 2*a*a; }                   /* y step */
   } while (x <= 0);

   while (y++ < b) {            /* too early stop for flat ellipses with a=1, */
       setPixel(xm, ym+y);                        /* -> finish tip of ellipse */
       setPixel(xm, ym-y);
   }
}

function plotCircle(xm, ym, r)
{
   var x = -r, y = 0, err = 2-2*r;                /* bottom left to top right */
   do {
      setPixel(xm-x, ym+y);                            /*   I. Quadrant +x +y */
      setPixel(xm-y, ym-x);                            /*  II. Quadrant -x +y */
      setPixel(xm+x, ym-y);                            /* III. Quadrant -x -y */
      setPixel(xm+y, ym+x);                            /*  IV. Quadrant +x -y */
      r = err;                                       
      if (r <= y) err += ++y*2+1;                                   /* y step */
      if (r > x || err > y) err += ++x*2+1;                         /* x step */
   } while (x < 0);
}

function plotEllipseRect(x0, y0, x1, y1)
{                              /* rectangular parameter enclosing the ellipse */
   var a = Math.abs(x1-x0), b = Math.abs(y1-y0), b1 = b&1;        /* diameter */
   var dx = 4*(1.0-a)*b*b, dy = 4*(b1+1)*a*a;              /* error increment */
   var err = dx+dy+b1*a*a, e2;                             /* error of 1.step */

   if (x0 > x1) { x0 = x1; x1 += a; }        /* if called with swapped points */
   if (y0 > y1) y0 = y1;                                  /* .. exchange them */
   y0 += (b+1)>>1; y1 = y0-b1;                              /* starting pixel */
   a = 8*a*a; b1 = 8*b*b;                               
                                                        
   do {                                                 
      setPixel(x1, y0);                                      /*   I. Quadrant */
      setPixel(x0, y0);                                      /*  II. Quadrant */
      setPixel(x0, y1);                                      /* III. Quadrant */
      setPixel(x1, y1);                                      /*  IV. Quadrant */
      e2 = 2*err;
      if (e2 <= dy) { y0++; y1--; err += dy += a; }                 /* y step */
      if (e2 >= dx || 2*err > dy) { x0++; x1--; err += dx += b1; }       /* x */
   } while (x0 <= x1);

   while (y0-y1 <= b) {                /* too early stop of flat ellipses a=1 */
      setPixel(x0-1, y0);                         /* -> finish tip of ellipse */
      setPixel(x1+1, y0++);
      setPixel(x0-1, y1);
      setPixel(x1+1, y1--);
   }
}