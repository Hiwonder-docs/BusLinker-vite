import{_ as n,a as s,b as e,c as p,d as t,e as i,f as l,g as o,h as r,i as c}from"./chunks/image46.BXd5GCor.js";import{_ as d,o as h,c as u,ak as g}from"./chunks/framework.yOMWXH4I.js";const m="/projects/BusLinker/en/latest/assets/image49.CE30rLzk.webp",P=JSON.parse('{"title":"4. Raspberry Pi Development","description":"","frontmatter":{},"headers":[],"relativePath":"docs/4_Raspberry_Pi_Development.md","filePath":"docs/4_Raspberry_Pi_Development.md"}'),v={name:"docs/4_Raspberry_Pi_Development.md"};function b(y,a,k,f,q,C){return h(),u("div",null,[...a[0]||(a[0]=[g('<h1 id="_4-raspberry-pi-development" tabindex="-1">4. Raspberry Pi Development <a class="header-anchor" href="#_4-raspberry-pi-development" aria-label="Permalink to &quot;4. Raspberry Pi Development&quot;">​</a></h1><h2 id="_4-1-getting-started" tabindex="-1">4.1. Getting Started <a class="header-anchor" href="#_4-1-getting-started" aria-label="Permalink to &quot;4.1. Getting Started&quot;">​</a></h2><h3 id="_4-1-1-wiring-instruction" tabindex="-1">4.1.1 Wiring Instruction <a class="header-anchor" href="#_4-1-1-wiring-instruction" aria-label="Permalink to &quot;4.1.1 Wiring Instruction&quot;">​</a></h3><p>This example uses a Raspberry Pi 5 controller powered by a 5 V adapter. The bus servo is connected to the debugging board, which is powered by an 11.1 V lithium battery. Finally, the debugging board is connected to any USB port of the Raspberry Pi 5 using a Type-C cable.</p><img loading="lazy" height="914" width="1313" src="'+m+'" class="common_img" style="width:500px;"><div class="note custom-block github-alert"><p class="custom-block-title">NOTE</p><p></p><ul><li><p><strong>When using Hiwonder&#39;s lithium battery, connect the battery cable with the red wire to the positive (+) terminal and the black wire to the negative (–) terminal of the DC port.</strong></p></li><li><p><strong>Before connecting the battery cables, make sure they are not already attached to the lithium battery. This prevents the risk of a short circuit caused by accidental contact between the positive and negative wires.</strong></p></li></ul></div><h3 id="_4-1-2-environment-configuration" tabindex="-1">4.1.2 Environment Configuration <a class="header-anchor" href="#_4-1-2-environment-configuration" aria-label="Permalink to &quot;4.1.2 Environment Configuration&quot;">​</a></h3><p>Install VNC software on PC. The software package is stored in <a href="https://drive.google.com/drive/folders/1iPk6CXFjQea67QZGc3Hl0c_-H1W_Dh-D" target="_blank" rel="noreferrer">2. Softwares \\ Remote Connection Software</a>. For the detailed operations of VNC, please refer to the relevant tutorials.</p><p>Drag the program and SDK library files into the Raspberry Pi system image. In this example, they are placed in the Demo folder on the desktop. Note: Make sure the library files are placed in the same directory as the program.</p><h2 id="_4-2-development-example" tabindex="-1">4.2 Development Example <a class="header-anchor" href="#_4-2-development-example" aria-label="Permalink to &quot;4.2 Development Example&quot;">​</a></h2><div class="note custom-block github-alert"><p class="custom-block-title">NOTE</p><p></p><p><strong>Before running this example, ensure that the jumpers on the debugging board are installed on the Servo and USB pins. Otherwise, communication will not function properly.</strong></p><img loading="lazy" height="679" width="857" src="'+n+'" class="common_img" style="width:300px;"></div><h3 id="_4-2-1-reading-the-servo-status" tabindex="-1">4.2.1 Reading the Servo Status <a class="header-anchor" href="#_4-2-1-reading-the-servo-status" aria-label="Permalink to &quot;4.2.1 Reading the Servo Status&quot;">​</a></h3><p>This example displays the bus servo status information through the terminal window.</p><p><strong>4.2.1.1 Run Program</strong></p><ol><li>Open a new terminal and enter the following command to navigate to the program directory:</li></ol><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>cd Desktop/Demo/examples</span></span></code></pre></div><img loading="lazy" height="47" width="420" src="'+s+'" class="common_img" style="width:600px;"><ol start="2"><li>Run the program by entering:</li></ol><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>python3 ping.py</span></span></code></pre></div><img loading="lazy" height="30" width="495" src="'+e+'" class="common_img" style="width:600px;"><p><strong>4.2.1.2 Program Outcome</strong></p><img loading="lazy" height="54" width="504" src="'+p+`" class="common_img" style="width:600px;"><p>After running the program, the terminal prints the servo status information, which corresponds to the data frames returned by the servo.</p><p><strong>4.2.1.3 Program Brief Analysis</strong></p><ul><li>Import the required libraries.</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>import sys</span></span>
<span class="line"><span>import os</span></span>
<span class="line"><span></span></span>
<span class="line"><span>sys.path.append(&quot;..&quot;)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>from servo_sdk import *</span></span></code></pre></div><ul><li>Initialize the communication port and servo objects.</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>PortHandler = PortHandler(&#39;/dev/ttyACM0&#39;) </span></span>
<span class="line"><span>ServoHandler = HxServoHandler(PortHandler)</span></span></code></pre></div><ul><li>Create and open a port object, then verify and set the port baud rate.</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>if PortHandler.openPort():</span></span>
<span class="line"><span>    print(&quot;Succeeded to open the port&quot;)</span></span>
<span class="line"><span>else:</span></span>
<span class="line"><span>    print(&quot;Failed to open the port&quot;)</span></span>
<span class="line"><span>    quit()</span></span>
<span class="line"><span></span></span>
<span class="line"><span>if PortHandler.setBaudRate(1000000):</span></span>
<span class="line"><span>    print(&quot;Succeeded to change the baudrate&quot;)</span></span>
<span class="line"><span>else:</span></span>
<span class="line"><span>    print(&quot;Failed to change the baudrate&quot;)</span></span>
<span class="line"><span>    quit()</span></span></code></pre></div><ul><li>Read the operating status of servo ID 1 and print the response packets returned by the servo.</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>rxpacket, result, error = ServoHandler.ping(1)</span></span>
<span class="line"><span>if result != COMM_SUCCESS:</span></span>
<span class="line"><span>    print(&quot;%s&quot; % ServoHandler.getTxRxResult(result))</span></span>
<span class="line"><span>else:</span></span>
<span class="line"><span>    print(f&quot;rx: {&#39; &#39;.join(f&#39;{byte:02X}&#39; for byte in rxpacket)}&quot;)</span></span>
<span class="line"><span>if error != 0:</span></span>
<span class="line"><span>    print(&quot;%s&quot; % ServoHandler.getRxPacketError(error))</span></span></code></pre></div><h3 id="_4-2-2-reading-the-servo-position" tabindex="-1">4.2.2 Reading the Servo Position <a class="header-anchor" href="#_4-2-2-reading-the-servo-position" aria-label="Permalink to &quot;4.2.2 Reading the Servo Position&quot;">​</a></h3><p>This example displays the bus servo position information through the terminal window.</p><p><strong>4.2.2.1 Run Program</strong></p><ol><li>Open a new terminal and enter the following command to navigate to the program directory:</li></ol><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>cd Desktop/Demo/examples</span></span></code></pre></div><img loading="lazy" height="47" width="420" src="`+s+'" class="common_img" style="width:600px;"><ol start="2"><li>Run the program by entering:</li></ol><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>python3 read_position.py</span></span></code></pre></div><img loading="lazy" height="27" width="457" src="'+t+'" class="common_img" style="width:600px;"><p><strong>4.2.2.2 Program Outcome</strong></p><img loading="lazy" height="212" width="522" src="'+i+`" class="common_img" style="width:600px;"><p>After running the program, the terminal continuously prints the current position information of the servo.</p><p><strong>4.2.2.3 Program Brief Analysis</strong></p><ul><li>Import the required libraries.</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>import sys</span></span>
<span class="line"><span>import os</span></span>
<span class="line"><span></span></span>
<span class="line"><span>sys.path.append(&quot;..&quot;)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>from servo_sdk import *</span></span></code></pre></div><ul><li>Initialize the communication port and servo objects.</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>PortHandler = PortHandler(&#39;/dev/ttyACM0&#39;) </span></span>
<span class="line"><span>ServoHandler = HxServoHandler(PortHandler)</span></span></code></pre></div><ul><li>Create and open a port object, then verify and set the port baud rate.</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>if PortHandler.openPort():</span></span>
<span class="line"><span>    print(&quot;Succeeded to open the port&quot;)</span></span>
<span class="line"><span>else:</span></span>
<span class="line"><span>    print(&quot;Failed to open the port&quot;)</span></span>
<span class="line"><span>    quit()</span></span>
<span class="line"><span></span></span>
<span class="line"><span>if PortHandler.setBaudRate(1000000):</span></span>
<span class="line"><span>    print(&quot;Succeeded to change the baudrate&quot;)</span></span>
<span class="line"><span>else:</span></span>
<span class="line"><span>    print(&quot;Failed to change the baudrate&quot;)</span></span>
<span class="line"><span>    quit()</span></span></code></pre></div><ul><li>The <code>readLoad</code> function continuously reads the current position of servo ID 1 and prints it, then closes the port.</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>while True:</span></span>
<span class="line"><span>    pos, result, error = ServoHandler.readLoad(1)</span></span>
<span class="line"><span>    if result != COMM_SUCCESS:</span></span>
<span class="line"><span>        print(&quot;%s&quot; % ServoHandler.getTxRxResult(result))</span></span>
<span class="line"><span>        break</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    if error != 0:</span></span>
<span class="line"><span>        print(&quot;%s&quot; % ServoHandler.getRxPacketError(error))</span></span>
<span class="line"><span>        break</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    print(pos)</span></span>
<span class="line"><span>    time.sleep(0.1)  # Delay for 0.1 seconds</span></span>
<span class="line"><span></span></span>
<span class="line"><span>PortHandler.closePort()</span></span></code></pre></div><h3 id="_4-2-3-servo-movement-control-in-write-mode" tabindex="-1">4.2.3 Servo Movement Control in Write Mode <a class="header-anchor" href="#_4-2-3-servo-movement-control-in-write-mode" aria-label="Permalink to &quot;4.2.3 Servo Movement Control in Write Mode&quot;">​</a></h3><p><strong>4.2.3.1 Run Program</strong></p><ol><li>Open a new terminal and enter the following command to navigate to the program directory:</li></ol><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>cd Desktop/Demo/examples</span></span></code></pre></div><img loading="lazy" height="47" width="420" src="`+s+'" class="common_img" style="width:600px;"><ol start="2"><li>Run the program by entering:</li></ol><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>python3 write_position.py</span></span></code></pre></div><img loading="lazy" height="26" width="415" src="'+l+`" class="common_img" style="width:600px;"><p><strong>4.2.3.2 Program Outcome</strong></p><p>After running the program, servo ID 1 moves to position -3000 at a speed of 100 steps per second and an acceleration of 0 steps per second squared.</p><p><strong>4.2.3.3 Program Brief Analysis</strong></p><ul><li>Import the required libraries.</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>import sys</span></span>
<span class="line"><span>import os</span></span>
<span class="line"><span></span></span>
<span class="line"><span>sys.path.append(&quot;..&quot;)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>from servo_sdk import *</span></span></code></pre></div><ul><li>Initialize the communication port and servo objects.</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>PortHandler = PortHandler(&#39;/dev/ttyACM0&#39;) </span></span>
<span class="line"><span>ServoHandler = HxServoHandler(PortHandler)</span></span></code></pre></div><ul><li>Create and open a port object, then verify and set the port baud rate.</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>if PortHandler.openPort():</span></span>
<span class="line"><span>    print(&quot;Succeeded to open the port&quot;)</span></span>
<span class="line"><span>else:</span></span>
<span class="line"><span>    print(&quot;Failed to open the port&quot;)</span></span>
<span class="line"><span>    quit()</span></span>
<span class="line"><span></span></span>
<span class="line"><span>if PortHandler.setBaudRate(1000000):</span></span>
<span class="line"><span>    print(&quot;Succeeded to change the baudrate&quot;)</span></span>
<span class="line"><span>else:</span></span>
<span class="line"><span>    print(&quot;Failed to change the baudrate&quot;)</span></span>
<span class="line"><span>    quit()</span></span></code></pre></div><ul><li>The <code>writePosEx</code> function is used to control the servo movement, and the port is closed afterward.</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>result, error = ServoHandler.writePosEx(1, -3000, 100, 0)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>if result != COMM_SUCCESS:</span></span>
<span class="line"><span>    print(&quot;%s&quot; % ServoHandler.getTxRxResult(result))</span></span>
<span class="line"><span>if error != 0:</span></span>
<span class="line"><span>    print(&quot;%s&quot; % ServoHandler.getRxPacketError(error))</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span># Close port</span></span>
<span class="line"><span>PortHandler.closePort()</span></span></code></pre></div><h3 id="_4-2-4-servo-movement-control-in-regwrite-mode" tabindex="-1">4.2.4 Servo Movement Control in RegWrite Mode <a class="header-anchor" href="#_4-2-4-servo-movement-control-in-regwrite-mode" aria-label="Permalink to &quot;4.2.4 Servo Movement Control in RegWrite Mode&quot;">​</a></h3><p><strong>4.2.4.1 Run Program</strong></p><ol><li>Open a new terminal and enter the following command to navigate to the program directory:</li></ol><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>cd Desktop/Demo/examples</span></span></code></pre></div><img loading="lazy" height="47" width="420" src="`+s+'" class="common_img" style="width:600px;"><ol start="2"><li>Run the program by entering:</li></ol><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>python3 write_position.py</span></span></code></pre></div><img loading="lazy" height="25" width="405" src="'+o+`" class="common_img" style="width:600px;"><p><strong>4.2.4.2 Program Outcome</strong></p><p>After running the program, servo ID 1 moves back and forth between positions 20 and 1000 at a speed of 1500 steps per second and an acceleration of 0 steps per second squared, with an interval of approximately 0.75 seconds.</p><p><strong>4.2.4.3 Program Brief Analysis</strong></p><ul><li>Import the required libraries.</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>import sys</span></span>
<span class="line"><span>import os</span></span>
<span class="line"><span></span></span>
<span class="line"><span>sys.path.append(&quot;..&quot;)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>from servo_sdk import *</span></span></code></pre></div><ul><li>Initialize the communication port and servo objects.</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>PortHandler = PortHandler(&#39;/dev/ttyACM0&#39;) </span></span>
<span class="line"><span>ServoHandler = HxServoHandler(PortHandler)</span></span></code></pre></div><ul><li>Create and open a port object, then verify and set the port baud rate.</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>if PortHandler.openPort():</span></span>
<span class="line"><span>    print(&quot;Succeeded to open the port&quot;)</span></span>
<span class="line"><span>else:</span></span>
<span class="line"><span>    print(&quot;Failed to open the port&quot;)</span></span>
<span class="line"><span>    quit()</span></span>
<span class="line"><span></span></span>
<span class="line"><span>if PortHandler.setBaudRate(1000000):</span></span>
<span class="line"><span>    print(&quot;Succeeded to change the baudrate&quot;)</span></span>
<span class="line"><span>else:</span></span>
<span class="line"><span>    print(&quot;Failed to change the baudrate&quot;)</span></span>
<span class="line"><span>    quit()</span></span></code></pre></div><ul><li>The <code>writeRegPosEx</code> function is used to control the servo movement, and the <code>regAction</code> function triggers the execution of <code>writeRegPosEx</code>. The port is closed afterward.</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>while True:</span></span>
<span class="line"><span>    result, error = ServoHandler.writeRegPosEx(1, 1000, 1500, 0)</span></span>
<span class="line"><span>    if result != COMM_SUCCESS:</span></span>
<span class="line"><span>        print(&quot;%s&quot; % ServoHandler.getTxRxResult(result))</span></span>
<span class="line"><span>        break</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    if error != 0:</span></span>
<span class="line"><span>        print(&quot;%s&quot; % ServoHandler.getRxPacketError(error))</span></span>
<span class="line"><span>        break</span></span>
<span class="line"><span>    ServoHandler.regAction()</span></span>
<span class="line"><span>    time.sleep(((1000-20) / 1500) + 0.1)  #//[(P1-P0)/(V)] + 0.1</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    # Servo (ID1~10) runs at a maximum speed ofV=1500*0.059=88.5rpm until it reaches position P0=20</span></span>
<span class="line"><span>    result, error = ServoHandler.writeRegPosEx(1, 20, 1500, 0)</span></span>
<span class="line"><span>    if result != COMM_SUCCESS:</span></span>
<span class="line"><span>        print(&quot;%s&quot; % ServoHandler.getTxRxResult(result))</span></span>
<span class="line"><span>        break</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    if error != 0:</span></span>
<span class="line"><span>        print(&quot;%s&quot; % ServoHandler.getRxPacketError(error))</span></span>
<span class="line"><span>        break</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    ServoHandler.regAction()</span></span>
<span class="line"><span>    time.sleep(((1000 - 20) / 1500) + 0.1)</span></span>
<span class="line"><span>    # time.sleep((1000-20)/(1500) + 0.1)) #//[(P1-P0)/(V)] + 0.1</span></span>
<span class="line"><span></span></span>
<span class="line"><span># Close port</span></span>
<span class="line"><span>PortHandler.closePort()</span></span></code></pre></div><h3 id="_4-2-5-servo-movement-control-in-syncwrite-mode" tabindex="-1">4.2.5 Servo Movement Control in SyncWrite Mode <a class="header-anchor" href="#_4-2-5-servo-movement-control-in-syncwrite-mode" aria-label="Permalink to &quot;4.2.5 Servo Movement Control in SyncWrite Mode&quot;">​</a></h3><p><strong>4.2.5.1 Run Program</strong></p><ol><li>Open a new terminal and enter the following command to navigate to the program directory:</li></ol><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>cd Desktop/Demo/examples</span></span></code></pre></div><img loading="lazy" height="47" width="420" src="`+s+'" class="common_img" style="width:600px;"><ol start="2"><li>Run the program by entering:</li></ol><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>python3 sync_write.py</span></span></code></pre></div><img loading="lazy" height="28" width="409" src="'+r+`" class="common_img" style="width:600px;"><p><strong>4.2.5.2 Program Outcome</strong></p><p>After running the program, servos ID 1 to 3 simultaneously move back and forth between positions 20 and 1000 at a speed of 1500 steps per second and an acceleration of 0 steps per second squared, with an interval of approximately 0.75 seconds.</p><p><strong>4.2.5.3 Program Brief Analysis</strong></p><ul><li>Import the required libraries.</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>import sys</span></span>
<span class="line"><span>import os</span></span>
<span class="line"><span></span></span>
<span class="line"><span>sys.path.append(&quot;..&quot;)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>from servo_sdk import *</span></span></code></pre></div><ul><li>Initialize the communication port and servo objects.</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>PortHandler = PortHandler(&#39;/dev/ttyACM0&#39;) </span></span>
<span class="line"><span>ServoHandler = HxServoHandler(PortHandler)</span></span></code></pre></div><ul><li>Create and open a port object, then verify and set the port baud rate.</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>if PortHandler.openPort():</span></span>
<span class="line"><span>    print(&quot;Succeeded to open the port&quot;)</span></span>
<span class="line"><span>else:</span></span>
<span class="line"><span>    print(&quot;Failed to open the port&quot;)</span></span>
<span class="line"><span>    quit()</span></span>
<span class="line"><span></span></span>
<span class="line"><span>if PortHandler.setBaudRate(1000000):</span></span>
<span class="line"><span>    print(&quot;Succeeded to change the baudrate&quot;)</span></span>
<span class="line"><span>else:</span></span>
<span class="line"><span>    print(&quot;Failed to change the baudrate&quot;)</span></span>
<span class="line"><span>    quit()</span></span></code></pre></div><ul><li>The <code>syncWritePosEx</code> function is used to control the servo movement, and the port is closed afterward.</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>while True:</span></span>
<span class="line"><span>    for id in range(1, 3):</span></span>
<span class="line"><span>        add_param_result = ServoHandler.syncWritePosEx(id, 1000, 1500, 0)</span></span>
<span class="line"><span>        if add_param_result != True:</span></span>
<span class="line"><span>            print(&quot;[ID:%03d] groupSyncWrite addparam failed&quot; % id)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    # Syncwrite goal position</span></span>
<span class="line"><span>    result = ServoHandler.GroupSyncWrite.txPacket()</span></span>
<span class="line"><span>    if result != COMM_SUCCESS:</span></span>
<span class="line"><span>        print(&quot;%s&quot; % result.getTxRxResult(result))</span></span>
<span class="line"><span>        break</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    time.sleep(((1000-20) / 1500) + 0.1)  #//[(P1-P0)/(V)] + 0.1</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    # Clear syncwrite parameter storage</span></span>
<span class="line"><span>    ServoHandler.GroupSyncWrite.clearParam()</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    for id in range(1, 3):</span></span>
<span class="line"><span>        add_param_result = ServoHandler.syncWritePosEx(id, 20, 1500, 0)</span></span>
<span class="line"><span>        if add_param_result != True:</span></span>
<span class="line"><span>            print(&quot;[ID:%03d] groupSyncWrite addparam failed&quot; % id)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    # Syncwrite goal position</span></span>
<span class="line"><span>    result = ServoHandler.GroupSyncWrite.txPacket()</span></span>
<span class="line"><span>    if result != COMM_SUCCESS:</span></span>
<span class="line"><span>        print(&quot;%s&quot; % result.getTxRxResult(result))</span></span>
<span class="line"><span>        break</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    time.sleep(((1000 - 20) / 1500) + 0.1)</span></span>
<span class="line"><span>    # time.sleep((1000-20)/(1500) + 0.1)) #//[(P1-P0)/(V)] + 0.1</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    # Clear syncwrite parameter storage</span></span>
<span class="line"><span>    ServoHandler.GroupSyncWrite.clearParam()</span></span>
<span class="line"><span># Close port</span></span>
<span class="line"><span>PortHandler.closePort()</span></span></code></pre></div><h3 id="_4-2-6-setting-the-servo-operating-mode" tabindex="-1">4.2.6 Setting the Servo Operating Mode <a class="header-anchor" href="#_4-2-6-setting-the-servo-operating-mode" aria-label="Permalink to &quot;4.2.6 Setting the Servo Operating Mode&quot;">​</a></h3><p><strong>4.2.6.1 Run Program</strong></p><ol><li>Open a new terminal and enter the following command to navigate to the program directory:</li></ol><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>cd Desktop/Demo/examples</span></span></code></pre></div><img loading="lazy" height="47" width="420" src="`+s+'" class="common_img" style="width:600px;"><ol start="2"><li>Run the program by entering:</li></ol><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>python3 select_mode.py</span></span></code></pre></div><img loading="lazy" height="27" width="378" src="'+c+`" class="common_img" style="width:600px;"><p><strong>4.2.6.2 Program Outcome</strong></p><p>After running the program, servo ID 1 is set to Position mode.</p><p><strong>4.2.6.3 Program Brief Analysis</strong></p><ul><li>Import the required libraries.</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>import sys</span></span>
<span class="line"><span>import os</span></span>
<span class="line"><span></span></span>
<span class="line"><span>sys.path.append(&quot;..&quot;)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>from servo_sdk import *</span></span></code></pre></div><ul><li>Initialize the communication port and servo objects.</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>PortHandler = PortHandler(&#39;/dev/ttyACM0&#39;) </span></span>
<span class="line"><span>ServoHandler = HxServoHandler(PortHandler)</span></span></code></pre></div><ul><li>Create and open a port object, then verify and set the port baud rate.</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>if PortHandler.openPort():</span></span>
<span class="line"><span>    print(&quot;Succeeded to open the port&quot;)</span></span>
<span class="line"><span>else:</span></span>
<span class="line"><span>    print(&quot;Failed to open the port&quot;)</span></span>
<span class="line"><span>    quit()</span></span>
<span class="line"><span></span></span>
<span class="line"><span>if PortHandler.setBaudRate(1000000):</span></span>
<span class="line"><span>    print(&quot;Succeeded to change the baudrate&quot;)</span></span>
<span class="line"><span>else:</span></span>
<span class="line"><span>    print(&quot;Failed to change the baudrate&quot;)</span></span>
<span class="line"><span>    quit()</span></span></code></pre></div><ul><li>The <code>selectMode</code> function is used to set the servo operating mode.</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>rxpacket, result, error = ServoHandler.selectMode(1, 0)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>if result != COMM_SUCCESS:</span></span>
<span class="line"><span>    print(&quot;%s&quot; % ServoHandler.getTxRxResult(result))</span></span>
<span class="line"><span>else:</span></span>
<span class="line"><span>    print(f&quot;rx: {&#39; &#39;.join(f&#39;{byte:02X}&#39; for byte in rxpacket)}&quot;)</span></span>
<span class="line"><span>if error != 0:</span></span>
<span class="line"><span>    print(&quot;%s&quot; % ServoHandler.getRxPacketError(error))</span></span></code></pre></div>`,129)])])}const S=d(v,[["render",b]]);export{P as __pageData,S as default};
