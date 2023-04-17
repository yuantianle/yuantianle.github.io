---
comments: true
ᴴₒᴴₒᴴₒ: ture
---

# ** 👨‍💻 Networking**

> Interview Questions for Networking

### **Overview**

!!! note ""

    Here is the table of the 7 layers:

    |Nums|Layers	            |Data Units|      |Functions |  
    |:-:|:-:|:-:|:-:|
    |7|Application Layer	|Data	        |Mail Services,Directory Services,FTAM   |
    |6|Presentation Layer	|Data	        |Encryption/Decryption, Compression|
    |5|Session Layer	    |Data	        |Session Establishment, Synchronization,Dialog Controller|
    |4|Transport Layer	|Segments,Datagram	|Segmentation|
    |3|Network Layer	    |Packets	    |Traffic control,Fragmentation,Routing|
    |2|Data Link Layer	|Frames	            |Flow control,Error control,Access control|
    |1|Physical Layer	    |Bits	        |Bit Synchronization,Bit rate control,Physical Topologies|

    For the seven layers, here are some corresponding protocols and devices/apps:

    === "1. Pys Lr"

        - Protocol:

            - Ethernet (IEEE 802.3)
            - Wi-Fi (IEEE 802.11)
            - Bluetooth
            - DSL (Digital Subscriber Line)
            - USB (Universal Serial Bus)
            - RS-232
  
        - Devices:

            - Hubs
            - Repeaters
            - Cables (e.g., twisted pair, coaxial, fiber optic)
            - Network Interface Cards (NICs)
            - Wireless Access Points

   === "2. Dlk Lr"

        - Protocol:

            - Ethernet (IEEE 802.3)
            - Wi-Fi (IEEE 802.11)
            - PPP (Point-to-Point Protocol)
            - HDLC (High-Level Data Link Control)
            - Frame Relay
            - ATM (Asynchronous Transfer Mode)

        - Devices:
  
            - Switches
            - Bridges
            - Wireless Access Points
            - Network Interface Cards (NICs)
            - Protocol Analyzers (e.g., Wireshark)


   === "3. Ntw Lr"

        - Protocol:

            - IPv4 (Internet Protocol version 4)
            - IPv6 (Internet Protocol version 6)
            - ICMP (Internet Control Message Protocol)
            - IGMP (Internet Group Management Protocol)
            - OSPF (Open Shortest Path First)
            - RIP (Routing Information Protocol)
            - BGP (Border Gateway Protocol)
  
        - Devices:

            - Routers
            - Layer 3 Switches
            - Firewalls
            - Applications:
            - Routing software (e.g., Cisco IOS, Juniper Junos OS)
            - Network management and monitoring tools (e.g., SolarWinds Network Performance Monitor)
  
   === "4. Tsp Lr"

        - Protocol:

            - TCP (Transmission Control Protocol)
            - UDP (User Datagram Protocol)
            - SCTP (Stream Control Transmission Protocol)
            - DCCP (Datagram Congestion Control Protocol)

  
        - Applications:

            - Wireshark (for analyzing TCP/UDP packets)
            - Netstat (for monitoring active network connections)


   === "5. Ssn Lr"

        - Protocol:

            - TLS (Transport Layer Security)
            - SSL (Secure Sockets Layer)
            - SSH (Secure Shell)
            - L2TP (Layer 2 Tunneling Protocol)
            - PPTP (Point-to-Point Tunneling Protocol)

        - Applications:

            - VPN clients and servers (e.g., OpenVPN, Cisco AnyConnect)
            - Remote desktop tools (e.g., TeamViewer, Microsoft Remote Desktop)
            - Network file sharing systems (e.g., SMB, NFS)
  
   === "6. Pst Lr"

        - Protocol:

            - MIME (Multipurpose Internet Mail Extensions)
            - XDR (External Data Representation)
            - ASN.1 (Abstract Syntax Notation One)
            - SSL/TLS (Secure Sockets Layer / Transport Layer Security)
            - JSON (JavaScript Object Notation)
            - XML (eXtensible Markup Language)

        - Applications:

            - Encryption/decryption tools (e.g., OpenSSL)
            - Data compression software (e.g., gzip, WinZip, WinRAR)
            - Web browsers (for rendering MIME types, e.g., Chrome, Firefox, Safari)

   === "7. Apl Lr"

        - Protocol:

            - HTTP (Hypertext Transfer Protocol)
            - HTTPS (Hypertext Transfer Protocol Secure)
            - FTP (File Transfer Protocol)
            - TFTP (Trivial File Transfer Protocol)
            - SMTP (Simple Mail Transfer Protocol)
            - POP3 (Post Office Protocol version 3)
            - IMAP (Internet Message Access Protocol)
            - DNS (Domain Name System)
            - SNMP (Simple Network Management Protocol)
            - Telnet
            - DHCP (Dynamic Host Configuration Protocol)
            - LDAP (Lightweight Directory Access Protocol)
            - SIP (Session Initiation Protocol)
            - XMPP (Extensible Messaging and Presence Protocol)

        - Applications:

            - Web browsers (e.g., Chrome, Firefox, Safari)
            - Email clients (e.g., Microsoft Outlook, Mozilla Thunderbird, Apple Mail)
            - File transfer clients (e.g., FileZilla, WinSCP)
            - Instant messaging apps (e.g., WhatsApp, Telegram, Signal)
            - Voice and video communication software (e.g., Zoom, Microsoft Teams, Skype)
            - Network management and monitoring tools (e.g., SolarWinds Network Performance Monitor, Nagios)


