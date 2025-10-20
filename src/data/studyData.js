export const studyData = {
  networkOverview: {
    title: "Network Overview",
    pdf: "Network Overview.pdf",
    sections: [
      { title: "Circuit Switching", points: ["Dedicated path", "Fixed bandwidth", "No sharing between users"] },
      { title: "Packet Switching", points: ["Store-and-forward", "Dynamic bandwidth allocation", "Efficient use of resources"] },
      { title: "Physical Media", points: ["Twisted pair, coaxial cable, fiber optic", "Transmission of bits over a medium"] },
      { title: "Protocols", points: ["Define communication rules", "Include syntax and semantics of messages"] },
      { title: "Protocol Stack", points: ["Layered architecture: Application, Transport, Network, Link, Physical"] },
    ],
    quiz: [
      { question: "What is the key limitation of circuit switching?", answer: "Inefficient for bursty data" },
      { question: "Which layer handles bit transmission over physical media?", answer: "Physical Layer" },
    ],
    crossLinks: [
      { label: "See also: Internet Structure", path: "/internet-structure" },
    ],
  },

  internetStructure: {
    title: "Internet Structure",
    pdf: "03 - Internet Structure.pdf",
    sections: [
      { title: "Access Networks", points: ["Home, institutional, and mobile access", "Bandwidth determines data rate"] },
      { title: "Home Network", points: ["Router connects devices to ISP", "Wired and wireless access supported"] },
      { title: "Network of Networks", points: ["Interconnection of ISPs", "Hierarchical structure with peering agreements"] },
      { title: "Global Transit ISPs", points: ["Provide backbone connectivity", "Operate under economic agreements"] },
      { title: "Tier-1 ISPs", points: ["Highest-level ISPs", "Direct access to the global Internet"] },
    ],
    quiz: [
      { question: "What is an access ISP?", answer: "An ISP providing Internet access to end users" },
      { question: "What defines a Tier-1 ISP?", answer: "It can reach every other network without paying transit fees" },
    ],
    crossLinks: [
      { label: "See also: Network Overview", path: "/network-overview" },
    ],
  },

  networkSecurity: {
    title: "Network Security",
    pdf: "Network Security.pdf",
    sections: [
      { title: "Packet Transmission", points: ["Packets sent between hosts", "Transmission delay = L/R"] },
      { title: "Multiplexing & Demultiplexing", points: ["Headers identify target process", "Socket demultiplexing"] },
      { title: "Packet Loss", points: ["Caused by queue overflow", "Managed through retransmission and congestion control"] },
      { title: "Throughput", points: ["Instantaneous vs average rate", "Bottleneck link limits rate"] },
      { title: "DoS Attacks", points: ["Denial-of-Service floods target", "Often coordinated via botnets"] },
    ],
    quiz: [
      { question: "What causes packet loss in routers?", answer: "Queue overflow" },
      { question: "What is a DoS attack?", answer: "Flooding a host to exhaust resources" },
    ],
  },

  applicationLayer: {
    title: "Application Layer",
    pdf: "Application Layer Overview.pdf",
    sections: [
      { title: "P2P Architecture", points: ["No central server", "Scalable, but complex management"] },
      { title: "Transport Services", points: ["TCP = reliable", "UDP = fast but unreliable"] },
      { title: "HTTP Overview", points: ["Request/response model", "Stateless protocol"] },
      { title: "Persistent HTTP", points: ["Reuses TCP connection", "Reduces delay"] },
      { title: "URL Methods", points: ["GET retrieves data", "POST sends user data"] },
    ],
    quiz: [
      { question: "What is the key difference between TCP and UDP?", answer: "TCP provides reliability, UDP does not" },
      { question: "What is persistent HTTP?", answer: "A method that reuses connections to reduce latency" },
    ],
  },

  transportProtocols: {
    title: "Transport Protocols",
    pdf: "07 - Transport Protocols.pdf",
    sections: [
      { title: "Transport Services", points: ["End-to-end communication", "Logical data channels"] },
      { title: "TCP vs UDP", points: ["TCP reliable, UDP connectionless", "Different use cases"] },
      { title: "Multiplexing", points: ["Port numbers identify sockets", "Multiple streams over one host"] },
      { title: "UDP Protocol", points: ["No handshake", "Low overhead"] },
      { title: "UDP Checksum", points: ["Error detection via checksum", "Integrity validation"] },
    ],
    quiz: [
      { question: "What is multiplexing?", answer: "Sending multiple streams over a single host connection" },
      { question: "Why use UDP?", answer: "For low-latency applications like video or games" },
    ],
  },

  reliableDataTransfer: {
    title: "Reliable Data Transfer",
    pdf: "Reliable Data Transfer.pdf",
    sections: [
      { title: "RDT Principles", points: ["Channels may corrupt or lose packets", "Reliability via ACK/NAK"] },
      { title: "rdt2.0 Bit Errors", points: ["Detect errors using checksums", "Retransmit corrupted packets"] },
      { title: "rdt2.0 Flaw", points: ["Corrupted ACKs cause ambiguity", "Fix via sequence numbers"] },
      { title: "rdt3.0 Loss Handling", points: ["Use timers for retransmission", "Ensure packet delivery"] },
    ],
    quiz: [
      { question: "How does rdt handle lost packets?", answer: "By retransmitting after timeout" },
      { question: "What is the purpose of sequence numbers?", answer: "To detect duplicates and maintain order" },
    ],
  },

  pipelinedProtocols: {
    title: "Pipelined Protocols",
    pdf: "09 - Pipelined protocols.pdf",
    sections: [
      { title: "Performance of rdt3.0", points: ["Low utilization due to waiting", "Stop-and-wait inefficiency"] },
      { title: "Pipelining", points: ["Send multiple packets before ACK", "Improves link utilization"] },
      { title: "Go-Back-N", points: ["Resend from error onward", "Single timer for oldest unACKed"] },
      { title: "Selective Repeat", points: ["Only resend lost packets", "Each packet has timer"] },
    ],
    quiz: [
      { question: "Which protocol uses cumulative ACKs?", answer: "Go-Back-N" },
      { question: "What is pipelining’s advantage?", answer: "Higher throughput" },
    ],
  },

  tcpOverview: {
    title: "TCP Overview",
    pdf: "Transmission Control Protocol (TCP) - Overview.pdf",
    sections: [
      { title: "TCP Basics", points: ["Full duplex", "Connection-oriented", "Byte stream service"] },
      { title: "3-Way Handshake", points: ["SYN, SYN-ACK, ACK", "Connection setup"] },
      { title: "Sequence Numbers", points: ["Byte-oriented numbering", "Handles reordering"] },
      { title: "Timeout Calculation", points: ["EstimatedRTT + DevRTT", "Adaptive retransmission"] },
      { title: "Fast Retransmit", points: ["Trigger on 3 duplicate ACKs", "Avoids timeouts"] },
      { title: "Connection Closing", points: ["Four-way FIN exchange", "TIME_WAIT period"] },
    ],
    quiz: [
      { question: "What triggers fast retransmit?", answer: "3 duplicate ACKs" },
      { question: "How many segments are exchanged during TCP close?", answer: "Four" },
    ],
  },

  congestionControl: {
    title: "Congestion Control",
    pdf: "Congestion Control Introduction.pdf",
    sections: [
      { title: "Congestion Basics", points: ["Too much data in network", "Delays, losses increase"] },
      { title: "AIMD", points: ["Additive Increase, Multiplicative Decrease", "Fair bandwidth sharing"] },
      { title: "Slow Start", points: ["Exponential cwnd growth", "Stops at threshold"] },
      { title: "Loss Detection", points: ["Timeout or triple ACKs", "Adjust cwnd"] },
      { title: "TCP Fairness", points: ["Equal sharing among flows", "AIMD convergence"] },
    ],
    quiz: [
      { question: "What does AIMD stand for?", answer: "Additive Increase, Multiplicative Decrease" },
      { question: "When does TCP exit slow start?", answer: "When threshold is reached" },
    ],
  },

  networkLayer: {
    title: "Network Layer Overview",
    pdf: "Network Layer Overview.pdf",
    sections: [
      { title: "Key Functions", points: ["Routing and forwarding", "Path determination"] },
      { title: "Connectionless Service", points: ["No dedicated path", "Independent packets"] },
      { title: "Virtual Circuits", points: ["Connection setup", "Consistent path for flow"] },
      { title: "Longest Prefix Match", points: ["Used in routing tables", "Finds best route"] },
      { title: "Router Architecture", points: ["Routing processor", "Switching fabric", "Forwarding plane"] },
    ],
    quiz: [
      { question: "What is the main role of routing?", answer: "Selects paths for packet delivery" },
      { question: "What is the forwarding function?", answer: "Moves packets from input to output link" },
    ],
  },

  networkLayerIP: {
    title: "Network Layer IP",
    pdf: "Network Layer IP.pdf",
    sections: [
      { title: "IP Fragmentation", points: ["Split large packets", "Reassemble at destination"] },
      { title: "IP Address Classes", points: ["A/B/C network classification", "Network + host ID"] },
      { title: "CIDR", points: ["Classless addressing", "Subnet mask notation /x"] },
      { title: "DHCP", points: ["Dynamic host configuration", "Auto IP assignment"] },
      { title: "DHCP Details", points: ["Provides DNS, gateway, mask", "Lease expiration"] },
    ],
    quiz: [
      { question: "What is CIDR?", answer: "Classless Inter-Domain Routing" },
      { question: "What layer uses DHCP?", answer: "Application layer for network config" },
    ],
  },

  networkLayerIP2: {
    title: "Network Layer IP 2",
    pdf: "Network Layer IP 2.pdf",
    sections: [
      { title: "NAT", points: ["Maps private to public addresses", "Port translation table"] },
      { title: "NAT Traversal", points: ["Static config or port forwarding", "Handles inbound connections"] },
      { title: "ICMP", points: ["Error reporting and diagnostics", "Ping/Echo requests"] },
      { title: "IPv6 Motivation", points: ["Larger address space", "Simpler header format"] },
      { title: "IPv4 to IPv6 Transition", points: ["Tunneling and coexistence", "Gradual migration"] },
      { title: "Input Port Queuing", points: ["Head-of-line blocking", "Queue management"] },
    ],
    quiz: [
      { question: "What does NAT do?", answer: "Maps private IPs to public IPs" },
      { question: "Why was IPv6 introduced?", answer: "To expand address space and simplify headers" },
    ],
  },
};

