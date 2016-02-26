Retrieving data from servers: XMLHTTPRequest.

Read: https://developer.mozilla.org/en/docs/Web/API/XMLHttpRequest/Using_XMLHttpRequest

Task:

Using http://docs.rainmachine.apiary.io/ retrieve information about device /provision and device /programs.
  1. Display the device name (system.netName) and location information (location.name)
  2. Below the above information list all programs names available on device and for each program list all zones and watering times
  
Replace the Apiary URL with the following URL (only works on local LAN):

https://192.168.12.155:8080/api/4/programs?access_token=5f7e3b1ea8fa3ecaa20607a2988f0a2477d25551db76e8dc3204582b

Tip:

How to use the above documentation:
  1. Go to http://docs.rainmachine.apiary.io/
  2. On the left side click on Programs
  3. Click /programs GET on the middle part 
  4. Example code should appear on right side
  5. Click on Try button from right side and then on Call Resource
  6. Scroll to inspect the reply from server (Response) and it's BODY which contains the json that you will need to process and display data
  7. You can use the example code by clicking  on Code Example
