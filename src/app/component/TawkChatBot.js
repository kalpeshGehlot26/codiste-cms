"use client";
import React, { useEffect } from 'react';

const TawkChatBot = () => {
	useEffect(() => {
        var s1=document.createElement("script");
        var s0=document.getElementsByTagName("script")[0];
		s1.async=true;
		s1.src='https://embed.tawk.to/642402ad4247f20fefe89e0c/1gsmakukn';
		s1.charset='UTF-8';
		s1.setAttribute('crossorigin','*');
		s0.parentNode.insertBefore(s1,s0);
        
      }, []);
    
    return null; 
};

export default TawkChatBot;
