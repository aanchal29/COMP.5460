Computer Graphics I -- Programming Assignment 1: 2D Drawing

The purpose of this assignment is to introduce you to the lower level 2D primitive rendering algorithms, implemented on a web browser using canvas. The meaning of this is that, for this assignment, you must draw all primitives yourself (point by point) without using any higher level API functions. (Future assignments will relax this.) If you did not watch my lecture captures from last year (which I assigned yesterday due to our class cancelation), you probably have no idea what I am talking about. We will have some limited discussion next class, but you'd do yourself a favor getting up to speed before that.

You will get up to 75% of the maximum listed points if you implement an interface that requires entering numerical parameters (e.g., line endpoints, circle radius and center); to get the full listed points you'll need to implement a more interactive interface.

Your assignment is:

1.  [60 points] Implement three Midpoint algorithms for line, circle, and ellipse (max 20 points each). Each algorithm should be initiated by a separate button, which will allow the user to draw the primitive under that button;

2.  [10 points] add a button to draw rectangles;

3.  [10 points] add a button to draw polygons (closed);

4.  [10 points] add a button to draw polylines (open);

5.  [10 points] Impress me: do some more. Some possibilities: "rubberbanding": the simple way to draw a line (or any other primitive) is similar to "driving two nails," one for each end point. This, however, is very restrictive as it does not allow to interactively define the position, length, and orientation of the segment. Rubberbanding allows the user to "drive one nail," then to interactively position the "second nail" (and to move it around, as if there was a rubber band around the two nails; that rubber band defines the line segment at any given moment) until the desired position, length, and orientation have been accomplished. Other improvements can include a richer interface, with controls for different colors, line thicknesses and styles, nicer button labels, and -- hopefully -- some creative ideas I have not thought about.

Due date, submission, other administrative details

*   Due: Wednesday, February 21, 2018, 11:59 P.M. (Note: due to yesterday's snow closing I pushed the due date by a week.)

*   Submission:

*   1. place the assignment in ~your/427546s2018/prog-hws/1 directory (see instructions for organizing submissions);

*   2. submit your complete source code via submit on CS as follows:

submit haim 427546s2018hw1 yourCompleteCodeArchive
where 427546s2018hw1 = the submission code
yourCompleteCodeArchive = an archive that includes all your source code, input files, examples, other used materials, and a README.txt (named exactly this); read and follow ALL instructions very carefully and precisely.

*  3. After submitting the archive (item #2 above), fill out the submission form (link available on the course requirement page).
