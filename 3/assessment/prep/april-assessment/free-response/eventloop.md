# JavaScript uses an event loop model for execution. Describe what role the 'message queue' plays in the event loop

* JavaScript is a single-threaded langugage.
* Messages are queued and moved to the execution stack in a first-in-first-out manner.
* Scopes of execution are piled onto the stack each time a function is called.
* Only when the execution stack has been cleared can a new message from the queue be added to the stack.
