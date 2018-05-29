### Question 1
setImmediate is pushed to the call stack immediately just after I/O events.
setTimeOut is pushed to the call stack after some timeout.

### Question 2
process.nextThick is at Priority queue. It has a higher priority than setImmediate events.
setImmediate is pushed to the call stack immediately just after I/O events.

### Question 3
events, require, http, url, os, stream, net, console, util, v8