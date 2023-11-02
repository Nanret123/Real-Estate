import React from 'react';
import { AiFillFacebook, AiOutlineInstagram, AiOutlineTwitter, AiOutlineGoogle } from "react-icons/ai";
import { FaPinterest } from "react-icons/fa";
import "./Contact.css";

const Contact = () => {
	return (
		<section className="contact">
		<div className="contact-text">
			<h2>Contact Us</h2>
			<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi odio mauris, auctor ut varius non, tempus nec nisi. Quisque at tellus risus. Aliquam erat volutpat. Proin et dolor magna. Sed vel metus justo. Mauris eu metus massa. Duis viverra ultricies nisl, ut pharetra eros hendrerit non. Phasellus laoreet libero non eros rhoncus sed iaculis ante</p>
			<div className="social">
				<button className="c-icon"><AiFillFacebook /></button>
				<button className="c-icon"><AiOutlineInstagram /> </button>
				<button className="c-icon"><AiOutlineTwitter /></button>
				<button className="c-icon"><FaPinterest /> </button>
				<button className="c-icon"><AiOutlineGoogle /> </button>
			</div>
			</div>
		
		</section>
	)
}

export default Contact