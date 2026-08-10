import{_ as n,o as a,c as e,ah as p}from"./chunks/framework.FcDY0lca.js";const t="/projects/BusLinker/en/latest/assets/image1.CEUYIYAa.png",i="/projects/BusLinker/en/latest/assets/image2.Bao3E4B8.png",l="/projects/BusLinker/en/latest/assets/image14.lliGsmVU.png",o="/projects/BusLinker/en/latest/assets/image15.Cf2rzQRj.png",r="/projects/BusLinker/en/latest/assets/image16.C6F0OOmU.png",c="/projects/BusLinker/en/latest/assets/image6.fxCOFRwg.png",d="/projects/BusLinker/en/latest/assets/image7.B3e-HYif.png",h="/projects/BusLinker/en/latest/assets/image8.Cvg9Ge9T.png",u="/projects/BusLinker/en/latest/assets/image9.717wUKrY.png",g="/projects/BusLinker/en/latest/assets/image9.717wUKrY.png",_="/projects/BusLinker/en/latest/assets/image11.D9A8A8WV.png",m="/projects/BusLinker/en/latest/assets/image12.B0iIJeiP.png",v="/projects/BusLinker/en/latest/assets/image13.fwVoJYx3.png",q=JSON.parse('{"title":"3. STM32 Development","description":"","frontmatter":{},"headers":[],"relativePath":"docs/3_STM32_Development.md","filePath":"docs/3_STM32_Development.md"}'),b={name:"docs/3_STM32_Development.md"};function f(k,s,x,y,w,X){return a(),e("div",null,[...s[0]||(s[0]=[p('<h1 id="_3-stm32-development" tabindex="-1">3. STM32 Development <a class="header-anchor" href="#_3-stm32-development" aria-label="Permalink to &quot;3. STM32 Development&quot;">​</a></h1><h2 id="_3-1-getting-started" tabindex="-1">3.1 Getting Started <a class="header-anchor" href="#_3-1-getting-started" aria-label="Permalink to &quot;3.1 Getting Started&quot;">​</a></h2><h3 id="_3-1-1-wiring-instruction" tabindex="-1">3.1.1 Wiring Instruction <a class="header-anchor" href="#_3-1-1-wiring-instruction" aria-label="Permalink to &quot;3.1.1 Wiring Instruction&quot;">​</a></h3><p>This example uses the STM32 controller for development, with power, program download, and debug data handled via the data cable. The bus servo is connected to the debugging board, which is powered by an 11.1 V lithium battery. The STM32F103RBT6 microcontroller and the debugging board are then connected through the serial pins using Dupont wires.</p><img loading="lazy" height="691" width="1259" src="'+t+'" class="common_img" style="width:600px;"><div class="note custom-block github-alert"><p class="custom-block-title">NOTE</p><p></p><ul><li>When using Hiwonder&#39;s lithium battery, connect the battery cable with the red wire to the positive (+) terminal and the black wire to the negative (–) terminal of the DC port.</li><li>Before connecting the battery cables, make sure they are not already attached to the lithium battery. This prevents the risk of a short circuit caused by accidental contact between the positive and negative wires.</li></ul></div><h3 id="_3-1-2-environment-configuration" tabindex="-1">3.1.2 Environment Configuration <a class="header-anchor" href="#_3-1-2-environment-configuration" aria-label="Permalink to &quot;3.1.2 Environment Configuration&quot;">​</a></h3><p>Install Keil MDK IDE software on PC. The software package is stored in <a href="https://drive.google.com/drive/folders/14k_MJ6fFkFPAEBaWcQeiwZTW2JwAIgTw" target="_blank" rel="noreferrer">2. Softwares \\ STM32 Programming Software</a>. For the detailed operations of Keil MDK IDE, please refer to the relevant tutorials.</p><p><strong>3.1.2.1 Program Upload</strong></p><ol><li><p>Connect the controller to the computer using a USB cable.</p></li><li><p>Double-click to open the STM32 serial programming software FlyMcu.</p><img loading="lazy" height="100" width="94" src="'+i+'" class="common_img" style="width:60px;"></li><li><p>Click the ... icon and select the HEX file to be programmed from the path: <strong>Serial_Servo\\MDK-ARM\\Serial_Servo</strong>.</p></li></ol><img loading="lazy" height="113" width="640" src="'+l+'" class="common_img" style="width:800px;"><ol start="4"><li>At position ② in the figure, select the serial port corresponding to the controller. At ③, select a baud rate of 115200. Configure ④ and ⑤ according to the options shown in the figure.</li></ol><img loading="lazy" height="518" width="400" src="'+o+'" class="common_img" style="width:600px;"><ol start="5"><li>Click <strong>Start ISP(P)</strong>, then press the <strong>RST</strong> button on the controller. The program will automatically begin downloading. Once the following content appears in the log output on the right, the program download will be complete.</li></ol><img loading="lazy" height="609" width="959" src="'+r+'" class="common_img" style="width:800px;"><h2 id="_3-2-development-example" tabindex="-1">3.2 Development Example <a class="header-anchor" href="#_3-2-development-example" aria-label="Permalink to &quot;3.2 Development Example&quot;">​</a></h2><div class="note custom-block github-alert"><p class="custom-block-title">NOTE</p><p></p><p><strong>Before running this example, ensure that the jumpers on the debugging board are installed on the Servo and TTL pins. Otherwise, communication will not function properly.</strong></p></div><img loading="lazy" height="743" width="938" src="'+c+`" class="common_img" style="width:300px;"><h3 id="_3-2-1-reading-the-servo-status" tabindex="-1">3.2.1 Reading the Servo Status <a class="header-anchor" href="#_3-2-1-reading-the-servo-status" aria-label="Permalink to &quot;3.2.1 Reading the Servo Status&quot;">​</a></h3><p>This example displays the bus servo status information through the serial debug assistant window.</p><p><strong>3.2.1.1 Run Program</strong></p><p>Double-click the <strong>Serial_Servo.uvprojx</strong> file located at the <a href="https://drive.google.com/drive/folders/15F7xqqgLFG87yAPyvIzhmUMEoYqZEltF" target="_blank" rel="noreferrer">STM32 Development \\ Program \\ Serial_Servo \\ MDK-ARM</a> folder. Change the value of the <strong>exp</strong> macro definition in the <strong>main.c</strong> file to <strong>1</strong>, then compile the project.</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>/* Private define ------------------------------------------------------------*/</span></span>
<span class="line"><span>/* USER CODE BEGIN PD */</span></span>
<span class="line"><span>#define exp 1</span></span></code></pre></div><p>Connect the STM32F103RBT6 microcontroller to the computer and upload the compiled HEX file to the microcontroller.</p><p><strong>3.2.1.2 Program Outcome</strong></p><p>After running the program, open the serial debug assistant, select the corresponding COM port, set the baud rate to 115200, and open the port. The debug assistant prints the sent data packets and the servo status information, which corresponds to the data frames returned by the servo.</p><img loading="lazy" height="567" width="772" src="`+d+'" class="common_img" style="width:400px;"><img loading="lazy" height="187" width="1126" src="'+h+`" class="common_img" style="width:800px;"><p><strong>3.2.1.3 Program Brief Analysis</strong></p><ul><li>Import the servo communication library and command parsing library.</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>#include &quot;HX_30HM.h&quot;</span></span>
<span class="line"><span>#include &quot;stdio.h&quot;</span></span>
<span class="line"><span>#include &quot;stdint.h&quot;</span></span>
<span class="line"><span>#include &quot;Packet_Handler.h&quot;</span></span></code></pre></div><ul><li>Define the parameters to send and receive.</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>ServoStatus_t status;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>int16_t write_pos = 4096;</span></span>
<span class="line"><span>int16_t read_pos = 4096;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>int16_t write_pos_offset = 100;</span></span>
<span class="line"><span>int16_t read_pos_offset;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>uint8_t write_acc = 100;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>int16_t write_speed = 1000;</span></span>
<span class="line"><span>int16_t read_speed;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>int16_t write_pwm_speed = 1000;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>uint16_t write_torque = 1000;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>int16_t sync_write1[2][4] = {{1, 0, 1000, 4095}, {2, 0, 1000, 4095}};</span></span>
<span class="line"><span>int16_t sync_write2[2][4] = {{1, 0, 1000, 0}, {2, 0, 1000, 0}};</span></span>
<span class="line"><span>uint8_t read_id[] = {1, 2};</span></span>
<span class="line"><span>int16_t sync_read_data[2][5];</span></span>
<span class="line"><span></span></span>
<span class="line"><span>uint8_t temp;</span></span>
<span class="line"><span>uint8_t vol;</span></span>
<span class="line"><span>uint16_t cur;</span></span>
<span class="line"><span>int16_t read_load;</span></span>
<span class="line"><span>uint8_t moving_status;</span></span></code></pre></div><ul><li>Define two hardware serial ports: Serial 1 is used to print debug information to the PC serial debug assistant at a baud rate of 115200. Serial 2 is used for communication with the debugging board at a baud rate of 1000000.</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>#include &quot;HX_30HM.h&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>/* Initialize all configured peripherals */ </span></span>
<span class="line"><span>MX_GPIO_Init();</span></span>
<span class="line"><span>MX_DMA_Init();</span></span>
<span class="line"><span>MX_USART1_UART_Init();</span></span>
<span class="line"><span>MX_USART2_UART_Init();</span></span>
<span class="line"><span></span></span>
<span class="line"><span>/* Initialize interrupts */ </span></span>
<span class="line"><span>MX_NVIC_Init();</span></span>
<span class="line"><span>/* USER CODE BEGIN 2 */ </span></span>
<span class="line"><span>servo_init();</span></span></code></pre></div><ul><li>The <strong>ping</strong> function broadcasts to search for servos, prints the detected ID numbers, and returns the working status of the servo.</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>status = servo_ping(0xFE);</span></span></code></pre></div><ul><li>Print the sent data packets and the servo response frames to the PC serial debug assistant.</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>sprintf((char *)info_buf,&quot;TX:%X %X %X %X %X %X\\r\\n&quot;,servo_packet.tx.header_1,\\ servo_packet.tx.header_2,\\</span></span>
<span class="line"><span>servo_packet.tx.elements.id,\\</span></span>
<span class="line"><span>servo_packet.tx.elements.length,\\</span></span>
<span class="line"><span>servo_packet.tx.elements.cmd,\\</span></span>
<span class="line"><span></span></span>
<span class="line"><span>servo_packet.tx.elements.args[servo_packet.tx.elements.length - 2]\\</span></span>
<span class="line"><span>);</span></span>
<span class="line"><span>serial_printf_string(info_buf);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>sprintf((char *)info_buf,&quot;RX:%X %X %X %X %X %X\\r\\n&quot;,servo_packet.rx.header_1,\\</span></span>
<span class="line"><span>servo_packet.rx.header_2,\\</span></span>
<span class="line"><span>servo_packet.rx.elements.id,\\</span></span>
<span class="line"><span>servo_packet.rx.elements.length,\\</span></span>
<span class="line"><span>servo_packet.rx.elements.cmd,\\</span></span>
<span class="line"><span></span></span>
<span class="line"><span>servo_packet.rx.elements.args[servo_packet.rx.elements.length - 2]\\</span></span>
<span class="line"><span>);</span></span>
<span class="line"><span>serial_printf_string(info_buf);</span></span></code></pre></div><ul><li>Print the returned servo ID and operating status parameters to the PC serial debug assistant.</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>sprintf((char *)info_buf,&quot;ID:%X\\r\\n&quot;,status.id);</span></span>
<span class="line"><span>serial_printf_string(info_buf);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>sprintf((char *)info_buf,&quot;statu:%X\\r\\n&quot;,status.error_byte); </span></span>
<span class="line"><span>serial_printf_string(info_buf);</span></span></code></pre></div><h3 id="_3-2-2-reading-the-servo-status" tabindex="-1">3.2.2 Reading the Servo Status <a class="header-anchor" href="#_3-2-2-reading-the-servo-status" aria-label="Permalink to &quot;3.2.2 Reading the Servo Status&quot;">​</a></h3><p>This example displays the current position information of the bus servo through the serial debug assistant window.</p><p><strong>3.2.2.1 Run Program</strong></p><p>Double-click the <strong>Serial_Servo.uvprojx</strong> file located at the <a href="https://drive.google.com/drive/folders/15F7xqqgLFG87yAPyvIzhmUMEoYqZEltF" target="_blank" rel="noreferrer">STM32 Development \\ Program \\ Serial_Servo \\ MDK-ARM</a> folder. Change the value of the <strong>exp</strong> macro definition in the <strong>main.c</strong> file to <strong>1</strong>, then compile the project.</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>/* Private define ------------------------------------------------------------*/</span></span>
<span class="line"><span>/* USER CODE BEGIN PD */</span></span>
<span class="line"><span>#define exp 1</span></span></code></pre></div><p>Connect the STM32F103RBT6 microcontroller to the computer and upload the compiled HEX file to the microcontroller.</p><p><strong>3.2.2.2 Program Outcome</strong></p><p>After running the program, the serial debug assistant prints the sent data packets and the current position of the servo, which corresponds to the data frames returned by the servo.</p><img loading="lazy" height="234" width="1126" src="`+u+`" class="common_img" style="width:800px;"><p><strong>3.2.2.3 Program Brief Analysis</strong></p><ul><li>Import the servo communication library and command parsing library.</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>#include &quot;HX_30HM.h&quot;</span></span>
<span class="line"><span>#include &quot;stdio.h&quot;</span></span>
<span class="line"><span>#include &quot;stdint.h&quot;</span></span>
<span class="line"><span>#include &quot;Packet_Handler.h&quot;</span></span></code></pre></div><ul><li>Define the parameters to send and receive.</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>ServoStatus_t status;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>int16_t write_pos = 4096;</span></span>
<span class="line"><span>int16_t read_pos = 4096;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>int16_t write_pos_offset = 100;</span></span>
<span class="line"><span>int16_t read_pos_offset;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>uint8_t write_acc = 100;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>int16_t write_speed = 1000;</span></span>
<span class="line"><span>int16_t read_speed;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>int16_t write_pwm_speed = 1000;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>uint16_t write_torque = 1000;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>int16_t sync_write1[2][4] = {{1, 0, 1000, 4095}, {2, 0, 1000, 4095}};</span></span>
<span class="line"><span>int16_t sync_write2[2][4] = {{1, 0, 1000, 0}, {2, 0, 1000, 0}};</span></span>
<span class="line"><span>uint8_t read_id[] = {1, 2};</span></span>
<span class="line"><span>int16_t sync_read_data[2][5];</span></span>
<span class="line"><span></span></span>
<span class="line"><span>uint8_t temp;</span></span>
<span class="line"><span>uint8_t vol;</span></span>
<span class="line"><span>uint16_t cur;</span></span>
<span class="line"><span>int16_t read_load;</span></span>
<span class="line"><span>uint8_t moving_status;</span></span></code></pre></div><ul><li>Define two hardware serial ports: Serial 1 is used to print debug information to the PC serial debug assistant at a baud rate of 115200. Serial 2 is used for communication with the debugging board at a baud rate of 1000000.</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>#include &quot;HX_30HM.h&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>/* Initialize all configured peripherals */ </span></span>
<span class="line"><span>MX_GPIO_Init();</span></span>
<span class="line"><span>MX_DMA_Init();</span></span>
<span class="line"><span>MX_USART1_UART_Init();</span></span>
<span class="line"><span>MX_USART2_UART_Init();</span></span>
<span class="line"><span></span></span>
<span class="line"><span>/* Initialize interrupts */ </span></span>
<span class="line"><span>MX_NVIC_Init();</span></span>
<span class="line"><span>/* USER CODE BEGIN 2 */ </span></span>
<span class="line"><span>servo_init();</span></span></code></pre></div><ul><li>The <code>read_pos</code> function reads the current position value of servo ID 1.</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>status = servo_read_pos(1, &amp;read_pos);</span></span></code></pre></div><ul><li>Print the sent data packets and the servo response frames to the PC serial debug assistant.</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>sprintf((char *)info_buf,&quot;TX:%X %X %X %X %X %X\\r\\n&quot;,servo_packet.tx.header_1,\\ servo_packet.tx.header_2,\\</span></span>
<span class="line"><span>servo_packet.tx.elements.id,\\</span></span>
<span class="line"><span>servo_packet.tx.elements.length,\\</span></span>
<span class="line"><span>servo_packet.tx.elements.cmd,\\</span></span>
<span class="line"><span></span></span>
<span class="line"><span>servo_packet.tx.elements.args[servo_packet.tx.elements.length - 2]\\</span></span>
<span class="line"><span>);</span></span>
<span class="line"><span>serial_printf_string(info_buf);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>sprintf((char *)info_buf,&quot;RX:%X %X %X %X %X %X\\r\\n&quot;,servo_packet.rx.header_1,\\</span></span>
<span class="line"><span>servo_packet.rx.header_2,\\</span></span>
<span class="line"><span>servo_packet.rx.elements.id,\\</span></span>
<span class="line"><span>servo_packet.rx.elements.length,\\</span></span>
<span class="line"><span>servo_packet.rx.elements.cmd,\\</span></span>
<span class="line"><span></span></span>
<span class="line"><span>servo_packet.rx.elements.args[servo_packet.rx.elements.length - 2]\\</span></span>
<span class="line"><span>);</span></span>
<span class="line"><span>serial_printf_string(info_buf);</span></span></code></pre></div><ul><li>Print the returned current position values of the servo to the PC serial debug assistant.</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>sprintf((char *)info_buf,&quot;Position:%hu\\r\\n&quot;,read_pos); </span></span>
<span class="line"><span>serial_printf_string(info_buf);</span></span></code></pre></div><h3 id="_3-2-3-servo-movement-control-in-write-mode" tabindex="-1">3.2.3 Servo Movement Control in Write Mode <a class="header-anchor" href="#_3-2-3-servo-movement-control-in-write-mode" aria-label="Permalink to &quot;3.2.3 Servo Movement Control in Write Mode&quot;">​</a></h3><p><strong>3.2.3.1 Run Program</strong></p><p>Double-click the <strong>Serial_Servo.uvprojx</strong> file located at the <a href="https://drive.google.com/drive/folders/15F7xqqgLFG87yAPyvIzhmUMEoYqZEltF" target="_blank" rel="noreferrer">STM32 Development \\ Program \\ Serial_Servo \\ MDK-ARM</a> folder. Change the value of the <strong>exp</strong> macro definition in the <strong>main.c</strong> file to <strong>1</strong>, then compile the project.</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>/* Private define ------------------------------------------------------------*/</span></span>
<span class="line"><span>/* USER CODE BEGIN PD */</span></span>
<span class="line"><span>#define exp 1</span></span></code></pre></div><p>Connect the STM32F103RBT6 microcontroller to the computer and upload the compiled HEX file to the microcontroller.</p><p><strong>3.2.3.2 Program Outcome</strong></p><p>After running the program, the serial debugger prints the sent data packets and the data frames returned by the servo. The servo with the specified ID moves to the target position according to the configured parameters.</p><img loading="lazy" height="234" width="1126" src="`+g+`" class="common_img" style="width:800px;"><p><strong>3.2.3.3 Program Brief Analysis</strong></p><ul><li>Import the servo communication library and command parsing library.</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>#include &quot;HX_30HM.h&quot;</span></span>
<span class="line"><span>#include &quot;stdio.h&quot;</span></span>
<span class="line"><span>#include &quot;stdint.h&quot;</span></span>
<span class="line"><span>#include &quot;Packet_Handler.h&quot;</span></span></code></pre></div><ul><li>Define the parameters to send and receive.</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>ServoStatus_t status;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>int16_t write_pos = 4096;</span></span>
<span class="line"><span>int16_t read_pos = 4096;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>int16_t write_pos_offset = 100;</span></span>
<span class="line"><span>int16_t read_pos_offset;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>uint8_t write_acc = 100;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>int16_t write_speed = 1000;</span></span>
<span class="line"><span>int16_t read_speed;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>int16_t write_pwm_speed = 1000;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>uint16_t write_torque = 1000;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>int16_t sync_write1[2][4] = {{1, 0, 1000, 4095}, {2, 0, 1000, 4095}};</span></span>
<span class="line"><span>int16_t sync_write2[2][4] = {{1, 0, 1000, 0}, {2, 0, 1000, 0}};</span></span>
<span class="line"><span>uint8_t read_id[] = {1, 2};</span></span>
<span class="line"><span>int16_t sync_read_data[2][5];</span></span>
<span class="line"><span></span></span>
<span class="line"><span>uint8_t temp;</span></span>
<span class="line"><span>uint8_t vol;</span></span>
<span class="line"><span>uint16_t cur;</span></span>
<span class="line"><span>int16_t read_load;</span></span>
<span class="line"><span>uint8_t moving_status;</span></span></code></pre></div><ul><li>Define two hardware serial ports: Serial 1 is used to print debug information to the PC serial debug assistant at a baud rate of 115200. Serial 2 is used for communication with the debugging board at a baud rate of 1000000.</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>#include &quot;HX_30HM.h&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>/* Initialize all configured peripherals */ </span></span>
<span class="line"><span>MX_GPIO_Init();</span></span>
<span class="line"><span>MX_DMA_Init();</span></span>
<span class="line"><span>MX_USART1_UART_Init();</span></span>
<span class="line"><span>MX_USART2_UART_Init();</span></span>
<span class="line"><span></span></span>
<span class="line"><span>/* Initialize interrupts */ </span></span>
<span class="line"><span>MX_NVIC_Init();</span></span>
<span class="line"><span>/* USER CODE BEGIN 2 */ </span></span>
<span class="line"><span>servo_init();</span></span></code></pre></div><ul><li>The <code>write_pos</code> function sets the target position of servo ID 1, and the servo moves to that position.</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>status = servo_write_pos(1, write_pos);</span></span></code></pre></div><ul><li>Print the sent data packets and the servo response frames to the PC serial debug assistant.</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>sprintf((char *)info_buf,&quot;TX:%X %X %X %X %X %X\\r\\n&quot;,servo_packet.tx.header_1,\\ servo_packet.tx.header_2,\\</span></span>
<span class="line"><span>servo_packet.tx.elements.id,\\</span></span>
<span class="line"><span>servo_packet.tx.elements.length,\\</span></span>
<span class="line"><span>servo_packet.tx.elements.cmd,\\</span></span>
<span class="line"><span></span></span>
<span class="line"><span>servo_packet.tx.elements.args[servo_packet.tx.elements.length - 2]\\</span></span>
<span class="line"><span>);</span></span>
<span class="line"><span>serial_printf_string(info_buf);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>sprintf((char *)info_buf,&quot;RX:%X %X %X %X %X %X\\r\\n&quot;,servo_packet.rx.header_1,\\</span></span>
<span class="line"><span>servo_packet.rx.header_2,\\</span></span>
<span class="line"><span>servo_packet.rx.elements.id,\\</span></span>
<span class="line"><span>servo_packet.rx.elements.length,\\</span></span>
<span class="line"><span>servo_packet.rx.elements.cmd,\\</span></span>
<span class="line"><span></span></span>
<span class="line"><span>servo_packet.rx.elements.args[servo_packet.rx.elements.length - 2]\\</span></span>
<span class="line"><span>);</span></span>
<span class="line"><span>serial_printf_string(info_buf);</span></span></code></pre></div><ul><li>Print the set target position values of the servo to the PC serial debug assistant.</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>sprintf((char *)info_buf,&quot;Position:%hu\\r\\n&quot;,read_pos); </span></span>
<span class="line"><span>serial_printf_string(info_buf);</span></span></code></pre></div><h3 id="_3-2-4-reading-the-servo-status" tabindex="-1">3.2.4 Reading the Servo Status <a class="header-anchor" href="#_3-2-4-reading-the-servo-status" aria-label="Permalink to &quot;3.2.4 Reading the Servo Status&quot;">​</a></h3><p><strong>3.2.4.1 Run Program</strong></p><p>Double-click the <strong>Serial_Servo.uvprojx</strong> file located at the <a href="https://drive.google.com/drive/folders/15F7xqqgLFG87yAPyvIzhmUMEoYqZEltF" target="_blank" rel="noreferrer">STM32 Development \\ Program \\ Serial_Servo \\ MDK-ARM</a> folder. Change the value of the <strong>exp</strong> macro definition in the <strong>main.c</strong> file to <strong>1</strong>, then compile the project.</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>/* Private define ------------------------------------------------------------*/</span></span>
<span class="line"><span>/* USER CODE BEGIN PD */</span></span>
<span class="line"><span>#define exp 1</span></span></code></pre></div><p>Connect the STM32F103RBT6 microcontroller to the computer and upload the compiled HEX file to the microcontroller.</p><p><strong>3.2.4.2 Program Outcome</strong></p><p>After running the program, the serial debugger prints the sent data packets and the data frames returned by the servo. The servo with the specified ID moves to the target position according to the configured parameters.</p><img loading="lazy" height="136" width="1126" src="`+_+`" class="common_img" style="width:800px;"><p><strong>3.2.4.3 Program Brief Analysis</strong></p><ul><li>Import the servo communication library and command parsing library.</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>#include &quot;HX_30HM.h&quot;</span></span>
<span class="line"><span>#include &quot;stdio.h&quot;</span></span>
<span class="line"><span>#include &quot;stdint.h&quot;</span></span>
<span class="line"><span>#include &quot;Packet_Handler.h&quot;</span></span></code></pre></div><ul><li>Define the parameters to send and receive.</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>ServoStatus_t status;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>int16_t write_pos = 4096;</span></span>
<span class="line"><span>int16_t read_pos = 4096;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>int16_t write_pos_offset = 100;</span></span>
<span class="line"><span>int16_t read_pos_offset;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>uint8_t write_acc = 100;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>int16_t write_speed = 1000;</span></span>
<span class="line"><span>int16_t read_speed;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>int16_t write_pwm_speed = 1000;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>uint16_t write_torque = 1000;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>int16_t sync_write1[2][4] = {{1, 0, 1000, 4095}, {2, 0, 1000, 4095}};</span></span>
<span class="line"><span>int16_t sync_write2[2][4] = {{1, 0, 1000, 0}, {2, 0, 1000, 0}};</span></span>
<span class="line"><span>uint8_t read_id[] = {1, 2};</span></span>
<span class="line"><span>int16_t sync_read_data[2][5];</span></span>
<span class="line"><span></span></span>
<span class="line"><span>uint8_t temp;</span></span>
<span class="line"><span>uint8_t vol;</span></span>
<span class="line"><span>uint16_t cur;</span></span>
<span class="line"><span>int16_t read_load;</span></span>
<span class="line"><span>uint8_t moving_status;</span></span></code></pre></div><ul><li>The <code>write_reg_pos_ex</code> function writes the acceleration, speed, and position information to the specified register of servo ID 1 without executing immediately. Execution is deferred and requires calling the <code>reg_action</code> function.</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>status = servo_write_reg_pos_ex(1, write_acc, write_speed, write_pos);</span></span></code></pre></div><ul><li>Print the sent data packets and the servo response frames to the PC serial debug assistant.</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>sprintf((char *)info_buf,&quot;TX:%X %X %X %X %X %X %X %X %X %X %X %X %X %X %X\\r\\n&quot;,servo_packet.tx.header_1,\\</span></span>
<span class="line"><span>servo_packet.tx.header_2,\\</span></span>
<span class="line"><span>servo_packet.tx.elements.id,\\</span></span>
<span class="line"><span>servo_packet.tx.elements.length,\\</span></span>
<span class="line"><span>servo_packet.tx.elements.cmd,\\</span></span>
<span class="line"><span>servo_packet.tx.elements.args[0],\\</span></span>
<span class="line"><span>servo_packet.tx.elements.args[1],\\</span></span>
<span class="line"><span>servo_packet.tx.elements.args[2],\\</span></span>
<span class="line"><span>servo_packet.tx.elements.args[3],\\</span></span>
<span class="line"><span>servo_packet.tx.elements.args[4],\\</span></span>
<span class="line"><span>servo_packet.tx.elements.args[5],\\</span></span>
<span class="line"><span>servo_packet.tx.elements.args[6],\\</span></span>
<span class="line"><span>servo_packet.tx.elements.args[7],\\</span></span>
<span class="line"><span>servo_packet.tx.elements.args[8],\\</span></span>
<span class="line"><span>servo_packet.tx.elements.args[servo_packet.tx.elements.length - 2]\\</span></span>
<span class="line"><span>);</span></span>
<span class="line"><span>serial_printf_string(info_buf);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>sprintf((char *)info_buf,&quot;RX:%X %X %X %X %X %X\\r\\n&quot;,servo_packet.rx.header_1,\\</span></span>
<span class="line"><span>servo_packet.rx.header_2,\\</span></span>
<span class="line"><span>servo_packet.rx.elements.id,\\</span></span>
<span class="line"><span>servo_packet.rx.elements.length,\\</span></span>
<span class="line"><span>servo_packet.rx.elements.cmd,\\</span></span>
<span class="line"><span>servo_packet.rx.elements.args[servo_packet.rx.elements.length - 2]\\</span></span>
<span class="line"><span>);</span></span>
<span class="line"><span>serial_printf_string(info_buf);</span></span></code></pre></div><ul><li>After calling <code>reg_action</code>, the servo executes the previously written <code>write_reg_pos_ex</code> command and moves accordingly.</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>status = servo_reg_action(1);</span></span></code></pre></div><ul><li>Print the sent data packets and the servo response frames to the PC serial debug assistant.</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>sprintf((char *)info_buf,&quot;TX:%X %X %X %X %X %X\\r\\n&quot;,servo_packet.tx.header_1,\\</span></span>
<span class="line"><span>servo_packet.tx.header_2,\\</span></span>
<span class="line"><span>servo_packet.tx.elements.id,\\</span></span>
<span class="line"><span>servo_packet.tx.elements.length,\\</span></span>
<span class="line"><span>servo_packet.tx.elements.cmd,\\</span></span>
<span class="line"><span>servo_packet.tx.elements.args[servo_packet.tx.elements.length - 2]\\</span></span>
<span class="line"><span>);</span></span>
<span class="line"><span>serial_printf_string(info_buf);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>sprintf((char *)info_buf,&quot;RX:%X %X %X %X %X %X\\r\\n&quot;,servo_packet.rx.header_1,\\</span></span>
<span class="line"><span>servo_packet.rx.header_2,\\</span></span>
<span class="line"><span>servo_packet.rx.elements.id,\\</span></span>
<span class="line"><span>servo_packet.rx.elements.length,\\</span></span>
<span class="line"><span>servo_packet.rx.elements.cmd,\\</span></span>
<span class="line"><span>servo_packet.rx.elements.args[servo_packet.rx.elements.length - 2]\\</span></span>
<span class="line"><span>);</span></span>
<span class="line"><span>serial_printf_string(info_buf);</span></span></code></pre></div><ul><li>Print the set acceleration, speed, and position parameters to the PC serial debug assistant.</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>sprintf((char *)info_buf,&quot;Target_Acc:%hu,Target_Speed:%hu,Target_Pos:%hu\\r\\n&quot;,write_acc, write_speed, write_pos);</span></span>
<span class="line"><span>serial_printf_string(info_buf);</span></span></code></pre></div><h3 id="_3-2-5-servo-movement-control-in-syncwrite-mode" tabindex="-1">3.2.5 Servo Movement Control in SyncWrite Mode <a class="header-anchor" href="#_3-2-5-servo-movement-control-in-syncwrite-mode" aria-label="Permalink to &quot;3.2.5 Servo Movement Control in SyncWrite Mode&quot;">​</a></h3><p><strong>3.2.5.1 Run Program</strong></p><p>Double-click the <strong>Serial_Servo.uvprojx</strong> file located at the <a href="https://drive.google.com/drive/folders/15F7xqqgLFG87yAPyvIzhmUMEoYqZEltF" target="_blank" rel="noreferrer">STM32 Development \\ Program \\ Serial_Servo \\ MDK-ARM</a> folder. Change the value of the <strong>exp</strong> macro definition in the <strong>main.c</strong> file to <strong>1</strong>, then compile the project.</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>/* Private define ------------------------------------------------------------*/</span></span>
<span class="line"><span>/* USER CODE BEGIN PD */</span></span>
<span class="line"><span>#define exp 1</span></span></code></pre></div><p>Connect the STM32F103RBT6 microcontroller to the computer and upload the compiled HEX file to the microcontroller.</p><p><strong>3.2.5.2 Program Outcome</strong></p><p>After running the program, the serial debugger prints the sent data packets. The servos with the specified IDs move to the target positions according to the configured parameters.</p><img loading="lazy" height="230" width="1126" src="`+m+`" class="common_img" style="width:800px;"><p><strong>3.2.5.3 Program Brief Analysis</strong></p><ul><li>Import the servo communication library and command parsing library.</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>#include &quot;HX_30HM.h&quot;</span></span>
<span class="line"><span>#include &quot;stdio.h&quot;</span></span>
<span class="line"><span>#include &quot;stdint.h&quot;</span></span>
<span class="line"><span>#include &quot;Packet_Handler.h&quot;</span></span></code></pre></div><ul><li>Define the parameters to send and receive.</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>ServoStatus_t status;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>int16_t write_pos = 4096;</span></span>
<span class="line"><span>int16_t read_pos = 4096;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>int16_t write_pos_offset = 100;</span></span>
<span class="line"><span>int16_t read_pos_offset;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>uint8_t write_acc = 100;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>int16_t write_speed = 1000;</span></span>
<span class="line"><span>int16_t read_speed;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>int16_t write_pwm_speed = 1000;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>uint16_t write_torque = 1000;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>int16_t sync_write1[2][4] = {{1, 0, 1000, 4095}, {2, 0, 1000, 4095}};</span></span>
<span class="line"><span>int16_t sync_write2[2][4] = {{1, 0, 1000, 0}, {2, 0, 1000, 0}};</span></span>
<span class="line"><span>uint8_t read_id[] = {1, 2};</span></span>
<span class="line"><span>int16_t sync_read_data[2][5];</span></span>
<span class="line"><span></span></span>
<span class="line"><span>uint8_t temp;</span></span>
<span class="line"><span>uint8_t vol;</span></span>
<span class="line"><span>uint16_t cur;</span></span>
<span class="line"><span>int16_t read_load;</span></span>
<span class="line"><span>uint8_t moving_status;</span></span></code></pre></div><ul><li>Define two hardware serial ports: Serial 1 is used to print debug information to the PC serial debug assistant at a baud rate of 115200. Serial 2 is used for communication with the debugging board at a baud rate of 1000000.</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>#include &quot;HX_30HM.h&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>/* Initialize all configured peripherals */ </span></span>
<span class="line"><span>MX_GPIO_Init();</span></span>
<span class="line"><span>MX_DMA_Init();</span></span>
<span class="line"><span>MX_USART1_UART_Init();</span></span>
<span class="line"><span>MX_USART2_UART_Init();</span></span>
<span class="line"><span></span></span>
<span class="line"><span>/* Initialize interrupts */ </span></span>
<span class="line"><span>MX_NVIC_Init();</span></span>
<span class="line"><span>/* USER CODE BEGIN 2 */ </span></span>
<span class="line"><span>servo_init();</span></span></code></pre></div><ul><li>The <code>sync_write_pos_ex</code> function sets the acceleration, speed, and position information for servo IDs 1 and 2, and the servos move to the specified positions.</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>// Write acceleration, speed, and position information to servo 1 and 2 simultaneously</span></span>
<span class="line"><span>status = servo_sync_write_pos_ex(sync_write1, 2);</span></span></code></pre></div><ul><li>Print the sent data packets to the PC serial debug assistant.</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>sprintf((char *)info_buf,&quot;TX:%X %X %X %X %X %X %X %X %X %X %X %X %X %X %X %X %X %X %X %X %X\\r\\n&quot;,servo_packet.tx.header_1,\\</span></span>
<span class="line"><span>servo_packet.tx.header_2,\\</span></span>
<span class="line"><span>servo_packet.tx.elements.id,\\</span></span>
<span class="line"><span>servo_packet.tx.elements.length,\\</span></span>
<span class="line"><span>servo_packet.tx.elements.cmd,\\</span></span>
<span class="line"><span>servo_packet.tx.elements.args[0],\\</span></span>
<span class="line"><span>servo_packet.tx.elements.args[1],\\</span></span>
<span class="line"><span></span></span>
<span class="line"><span>servo_packet.tx.elements.args[2],\\</span></span>
<span class="line"><span>servo_packet.tx.elements.args[3],\\</span></span>
<span class="line"><span>servo_packet.tx.elements.args[4],\\</span></span>
<span class="line"><span>servo_packet.tx.elements.args[5],\\</span></span>
<span class="line"><span>servo_packet.tx.elements.args[6],\\</span></span>
<span class="line"><span>servo_packet.tx.elements.args[7],\\</span></span>
<span class="line"><span>servo_packet.tx.elements.args[8],\\</span></span>
<span class="line"><span>servo_packet.tx.elements.args[9],\\</span></span>
<span class="line"><span>servo_packet.tx.elements.args[10],\\</span></span>
<span class="line"><span></span></span>
<span class="line"><span>servo_packet.tx.elements.args[11],\\</span></span>
<span class="line"><span>servo_packet.tx.elements.args[12],\\</span></span>
<span class="line"><span>servo_packet.tx.elements.args[13],\\</span></span>
<span class="line"><span>servo_packet.tx.elements.args[14],\\</span></span>
<span class="line"><span>servo_packet.tx.elements.args[15],\\</span></span>
<span class="line"><span>servo_packet.tx.elements.args[16],\\</span></span>
<span class="line"><span>servo_packet.tx.elements.args[17],\\</span></span>
<span class="line"><span>servo_packet.tx.elements.args[18],\\</span></span>
<span class="line"><span>servo_packet.tx.elements.args[19],\\</span></span>
<span class="line"><span>servo_packet.tx.elements.args[servo_packet.tx.elements.length - 2]\\</span></span>
<span class="line"><span></span></span>
<span class="line"><span>);</span></span>
<span class="line"><span>serial_printf_string(info_buf);</span></span></code></pre></div><ul><li>Print the set servo ID, acceleration, speed, and position parameters to the PC serial debug assistant.</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>sprintf((char*)info_buf,&quot;ServoID:%hu,Target_Acc:%hu,Target_Speed:%hu,Target_Pos:%hu\\r\\n&quot;,\\</span></span>
<span class="line"><span>sync_write1[0][0],sync_write1[0][1],\\</span></span>
<span class="line"><span>sync_write1[0][2],sync_write1[0][3]);</span></span>
<span class="line"><span>serial_printf_string(info_buf);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>sprintf((char</span></span>
<span class="line"><span>*)info_buf,&quot;ServoID:%hu,Target_Acc:%hu,Target_Speed:%hu,Target_Pos:%hu\\r\\n&quot;,\\</span></span>
<span class="line"><span>sync_write1[1][0],sync_write1[1][1],\\</span></span>
<span class="line"><span>sync_write1[1][2],sync_write1[1][3]);</span></span>
<span class="line"><span>serial_printf_string(info_buf);</span></span></code></pre></div><h3 id="_3-2-6-reading-the-servo-status" tabindex="-1">3.2.6 Reading the Servo Status <a class="header-anchor" href="#_3-2-6-reading-the-servo-status" aria-label="Permalink to &quot;3.2.6 Reading the Servo Status&quot;">​</a></h3><p><strong>3.2.6.1 Run Program</strong></p><p>Double-click the <strong>Serial_Servo.uvprojx</strong> file located at the <a href="https://drive.google.com/drive/folders/15F7xqqgLFG87yAPyvIzhmUMEoYqZEltF" target="_blank" rel="noreferrer">STM32 Development \\ Program \\ Serial_Servo \\ MDK-ARM</a> folder. Change the value of the <strong>exp</strong> macro definition in the <strong>main.c</strong> file to <strong>1</strong>, then compile the project.</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>/* Private define ------------------------------------------------------------*/</span></span>
<span class="line"><span>/* USER CODE BEGIN PD */</span></span>
<span class="line"><span>#define exp 1</span></span></code></pre></div><p>Connect the STM32F103RBT6 microcontroller to the computer and upload the compiled HEX file to the microcontroller.</p><p><strong>3.2.6.2 Program Outcome</strong></p><p>After running the program, the serial debugger prints the sent data packets and the data frames returned by the servo. The operating mode of the servo with the specified ID is set.</p><img loading="lazy" height="153" width="1126" src="`+v+`" class="common_img" style="width:800px;"><p><strong>3.2.6.3 Program Brief Analysis</strong></p><ul><li>Import the servo communication library and command parsing library.</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>#include &quot;HX_30HM.h&quot;</span></span>
<span class="line"><span>#include &quot;stdio.h&quot;</span></span>
<span class="line"><span>#include &quot;stdint.h&quot;</span></span>
<span class="line"><span>#include &quot;Packet_Handler.h&quot;</span></span></code></pre></div><ul><li>Define the parameters to send and receive.</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>ServoStatus_t status;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>int16_t write_pos = 4096;</span></span>
<span class="line"><span>int16_t read_pos = 4096;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>int16_t write_pos_offset = 100;</span></span>
<span class="line"><span>int16_t read_pos_offset;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>uint8_t write_acc = 100;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>int16_t write_speed = 1000;</span></span>
<span class="line"><span>int16_t read_speed;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>int16_t write_pwm_speed = 1000;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>uint16_t write_torque = 1000;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>int16_t sync_write1[2][4] = {{1, 0, 1000, 4095}, {2, 0, 1000, 4095}};</span></span>
<span class="line"><span>int16_t sync_write2[2][4] = {{1, 0, 1000, 0}, {2, 0, 1000, 0}};</span></span>
<span class="line"><span>uint8_t read_id[] = {1, 2};</span></span>
<span class="line"><span>int16_t sync_read_data[2][5];</span></span>
<span class="line"><span></span></span>
<span class="line"><span>uint8_t temp;</span></span>
<span class="line"><span>uint8_t vol;</span></span>
<span class="line"><span>uint16_t cur;</span></span>
<span class="line"><span>int16_t read_load;</span></span>
<span class="line"><span>uint8_t moving_status;</span></span></code></pre></div><ul><li>Define two hardware serial ports: Serial 1 is used to print debug information to the PC serial debug assistant at a baud rate of 115200. Serial 2 is used for communication with the debugging board at a baud rate of 1000000.</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>#include &quot;HX_30HM.h&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>/* Initialize all configured peripherals */ </span></span>
<span class="line"><span>MX_GPIO_Init();</span></span>
<span class="line"><span>MX_DMA_Init();</span></span>
<span class="line"><span>MX_USART1_UART_Init();</span></span>
<span class="line"><span>MX_USART2_UART_Init();</span></span>
<span class="line"><span></span></span>
<span class="line"><span>/* Initialize interrupts */ </span></span>
<span class="line"><span>MX_NVIC_Init();</span></span>
<span class="line"><span>/* USER CODE BEGIN 2 */ </span></span>
<span class="line"><span>servo_init();</span></span></code></pre></div><ul><li>The <code>select_mode</code> function sets the operating mode of servo ID 1.</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>status = servo_select_mode(1, 0);</span></span></code></pre></div><ul><li>Print the sent data packets and the servo response frames to the PC serial debug assistant.</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>sprintf((char *)info_buf,&quot;TX:%X %X %X %X %X %X %X %X\\r\\n&quot;,servo_packet.tx.header_1,\\</span></span>
<span class="line"><span>servo_packet.tx.header_2,\\</span></span>
<span class="line"><span>servo_packet.tx.elements.id,\\</span></span>
<span class="line"><span></span></span>
<span class="line"><span>servo_packet.tx.elements.length,\\</span></span>
<span class="line"><span>servo_packet.tx.elements.cmd,\\</span></span>
<span class="line"><span></span></span>
<span class="line"><span>servo_packet.tx.elements.args[0],\\</span></span>
<span class="line"><span></span></span>
<span class="line"><span>servo_packet.tx.elements.args[1],\\</span></span>
<span class="line"><span>servo_packet.tx.elements.args[servo_packet.tx.elements.length - 2]\\</span></span>
<span class="line"><span>);</span></span>
<span class="line"><span>serial_printf_string(info_buf);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>sprintf((char *)info_buf,&quot;RX:%X %X %X %X %X %X\\r\\n&quot;,servo_packet.rx.header_1,\\</span></span>
<span class="line"><span>servo_packet.rx.header_2,\\</span></span>
<span class="line"><span>servo_packet.rx.elements.id,\\</span></span>
<span class="line"><span>servo_packet.rx.elements.length,\\</span></span>
<span class="line"><span>servo_packet.rx.elements.cmd,\\</span></span>
<span class="line"><span>servo_packet.rx.elements.args[servo_packet.rx.elements.length - 2]\\</span></span>
<span class="line"><span></span></span>
<span class="line"><span>);</span></span>
<span class="line"><span>serial_printf_string(info_buf);</span></span></code></pre></div><ul><li>Print the returned servo ID and operating status parameters to the PC serial debug assistant.</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>sprintf((char *)info_buf,&quot;Position:%hu\\r\\n&quot;,read_pos); </span></span>
<span class="line"><span>serial_printf_string(info_buf);</span></span></code></pre></div>`,149)])])}const S=n(b,[["render",f]]);export{q as __pageData,S as default};
