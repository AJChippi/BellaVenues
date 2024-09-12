import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable({
	providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
	createDb() {
		const pages = [
			{
				id: 1,
				name: 'intro',
				title: 'About',
				description:
				""
			},
			{
				id: 2,
				name: 'clients',
				tagline: 'TRUST',
				title: 'Companies who use our services',
				description:
					'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam!',
			},
			{
				id: 3,
				name: 'services',
				tagline: 'BELIEVING',
				title: 'Focusing On What Matters Most',
				description:
					'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam!',
			},
			{
				id: 4,
				name: 'testimonials',
				tagline: 'FEEDBACK',
				title: 'What our customers are saying',
				description: '',
			},
			{
				id: 5,
				name: 'pricing',
				tagline: 'YOUR CHOICE',
				title: 'We have the right package for you',
				description: '',
			},
			{
				id: 6,
				name: 'footer',
				tagline: 'Tel: 810.687.5600',
				developer: 'Email: dpanter@pmcworks.com',
				developerlink: 'dpanter@pmcworks.com',
			},
			{
				id: 7,
				name: 'header',
				tagline: "Bella Venues",
				title:
					' Memories are made at Bella Venue!',
				buttontext: 'START CREATING TODAY',
				buttonlink: '/home',
				image: '',
			},
		];
		const features = [
			{
				id: 1,
				picture: 'BrideRoom.jpg',
				title: 'About Bella Venue',
				description:
					`Welcome to Bella Venue, where rustic charm meets eco-conscious elegance. Nestled amidst the tranquil woodlands of Clio, Michigan, Bella Venue is a picturesque barn set on 4.5 acres of enchanting scenery. Our commitment to environmental sustainability is woven into every aspect of our operations. From our eco-friendly practices to our dedication to minimizing carbon footprint, Bella Venue is not just a wedding destination, but a celebration of nature's beauty. Join us in our mission to preserve the planet as you embark on your journey of love and commitment in this breathtaking setting, where every detail is as sustainable as it is stunning.`,
			},
			{
				id: 2,
				picture: 'BrideRoom.jpg',
				title: 'The Small Details',
				description:
					`At Bella Venue, we understand that planning a wedding or event can be overwhelming. That's why we offer comprehensive services to ensure that your special day is nothing short of perfection. Our expert team is dedicated to turning your vision into reality, offering design consultation, meticulous set-up, and seamless tear-down services.

					Elevate your event with our professional bartending services, where skilled mixologists will craft signature cocktails and ensure that your guests' glasses are always filled. Let the rhythm of the night come alive with our talented DJs, who will curate the perfect playlist to keep the dance floor buzzing all night long.
					
					Whether you choose to utilize one or all of our services, rest assured that our team will go above and beyond to exceed your expectations, leaving you free to savor every moment of your celebration. At Bella Venue, we're here to bring your dreams to life, one unforgettable event at a time.`,
			},
			
		];
		const feature1 = [
			{
				id: 1,
				icon: 'BrideRoom.jpg',
				title: 'Services',
				buttonLink: "/services",
				buttonText: "View Services",
				description:
					`Discover the perfect blend of convenience and elegance at Bella Venue. Our array of services ensures that your event is not only memorable but also stress-free. From our charming venue space nestled in the heart of Clio's woodlands to our expert design consultation, we're here to transform your vision into a breathtaking reality.
					Let our skilled bartenders craft delightful libations while our talented DJs keep the rhythm alive, ensuring an unforgettable experience for you and your guests. Whether you're hosting a wedding, corporate event, or special celebration, Bella Venue is your one-stop destination for unparalleled service and unforgettable memories.`,
			},
			{
				id: 2,
				icon: 'BrideRoom.jpg',
				title: 'Gallery',
				buttonLink: "/gallery",
				buttonText: "View Gallery",
				description:
					`Experience the magic of past weddings and events at Bella Venue! Click here to browse through a collection of captivating images that showcase the beauty and joy of celebrations held at our rustic oasis in Clio, Michigan. Let these snapshots inspire your imagination and envision your own unforgettable event at Bella Venue.`,
			},
			{
				id: 3,
				icon: 'BrideRoom.jpg',
				title: 'Testimonials',
				buttonLink: "/testimonials",
				buttonText: "View Testimonials",
				description: `Curious about what past clients have to say about their experiences hosting events at Bella Venue? Dive into our testimonials section to read firsthand accounts of unforgettable celebrations. Discover why Bella Venue continues to be the cherished choice for weddings, corporate gatherings, and special occasions.`
			},

		];
		const images = [
			{ id: 1, name: 'BrideRoom.jpg' },
			{ id: 2, name: 'dance.jpeg' },
			{ id: 3, name: 'EmtpyDance.jpeg' },
			// { id: 4, name: '' },
			// { id: 5, name: '' },
			// { id: 6, name: '' },
		];
		const menu = [
			{ id: 1, title: 'Home', link: '/home' },
			{ id: 2, title: 'About', link: '/about' },
			//{ id: 3, title: 'Services', link: '/services' },
			{ id: 4, title: 'Gallery', link: '/gallery' },
			{ id: 5, title: 'Testimonials', link: '/testimonials' },
			//{ id: 6, title: 'Clients', link: '/clients' },
			{ id: 7, title: 'Pricing', link: '/pricing' },
		];
		const companies = [
			{
				id: 1,
				name: 'Tree',
				weblink: 'company-logo1.png',
				logo: 'company-logo1.png',
			},
			{
				id: 2,
				name: 'Fingerprint',
				weblink: 'company-logo2.png',
				logo: 'company-logo2.png',
			},
			{
				id: 3,
				name: 'The Man',
				weblink: 'company-logo3.png',
				logo: 'company-logo3.png',
			},
			{
				id: 4,
				name: 'Mustache',
				weblink: 'company-logo4.png',
				logo: 'company-logo4.png',
			},
			{
				id: 5,
				name: 'Goat',
				weblink: 'company-logo5.png',
				logo: 'company-logo5.png',
			},
			{
				id: 6,
				name: 'Justice',
				weblink: 'company-logo6.png',
				logo: 'company-logo6.png',
			},
			{
				id: 7,
				name: 'Ball',
				weblink: 'company-logo7.png',
				logo: 'company-logo7.png',
			},
			{
				id: 8,
				name: 'Cold',
				weblink: 'company-logo8.png',
				logo: 'company-logo8.png',
			},
			{
				id: 9,
				name: 'Cold',
				weblink: 'company-logo9.png',
				logo: 'company-logo9.png',
			},
		];
		const feedback = [
			{
				id: 1,
				name: 'Ali Gildey',
				userimage: 'aliGildey.png',
				comments:
					`"Bella Venues is a beautiful little location for your wedding or event! Margee has such a vison and you won't be disappointed with the beauty she can accomplish for you!"`,
			},
			{
				id: 2,
				name: 'Amanda DeFord',
				userimage: 'amandaDeford.png',
				comments: `
Ali Gildey
"Bella Venues is a beautiful little location for your wedding or event! Margee has such a vison and you won't be disappointed with the beauty she can accomplish for you!"

Amanda DeFord
"Bella Venues is such a great space! You could use the barn for weddings, graduation parties, anniversary parties, etc. Black Hive is amazing and they provide everything, including photography and bartending! They will make sure that you have a great experience! I’m happy to see them bring such a great event space to the local community!"`
			},
			{
				id: 3,
				name: 'Franki May',
				userimage: 'FrankiMay.png',
				comments: `"I am so impressed with the Venue! The bathrooms are cute and clean. I LOVE the space they have for the bride and bridesmaids to get ready! They have thought of everything! Very talented family!… Even Margee’s 9yo son is amazing at decorating the tables Super excited to be able to work with them in the future!"`
			
			},
		];
		const plans = [
			{
				id: 1,
				title: 'PERSONAL',
				subtitle: 'The standard version',
				description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
				price: '19',
				currency: '₹',
				downloads: '5 Downloads',
				extensions: '2 Extensions',
				tutorials: 'Tutorials',
				support: 'Forum Support',
				updates: '1 year free updates',
				buttontext: 'BUY TODAY',
				buttonlink: '#',
				featured: false,
			},
			{
				id: 2,
				title: 'STUDENT',
				subtitle: 'Most popular choice',
				description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
				price: '29',
				currency: '₹',
				downloads: '15 Downloads',
				extensions: '5 Extensions',
				tutorials: 'Tutorials with files',
				support: 'Forum Support',
				updates: '2 year free updates',
				buttontext: 'BUY TODAY',
				buttonlink: '#',
				featured: true,
			},
			{
				id: 3,
				title: 'BUSINESS',
				subtitle: 'For the whole team',
				description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
				price: '49',
				currency: '₹',
				downloads: 'Unlimited Downloads',
				extensions: 'Unlimited Downloads',
				tutorials: 'HD Video Tutorials',
				support: 'Chat Support',
				updates: 'Lifetime free updates',
				buttontext: 'BUY TODAY',
				buttonlink: '#',
				featured: false,
			},
		];
		const websites = [
			{
				id: 1,
				link: 'https://www.facebook.com/BellaVenuesMI/?_rdr',
				title: 'Facebook',
				target: '_blank',
				username: 'Thor',
				icon: 'facebook',
			},
			// {
			//   id: 2,
			//   link: "https://googleplus.com/",
			//   title: "Google+",
			//   target: "_blank",
			//   username: "+jagmohan",
			//   icon: "google-plus",
			// },
			// {
			// 	id: 3,
			// 	link: 'https://twitter.com/',
			// 	title: 'Twitter',
			// 	target: '_blank',
			// 	username: 'joker',
			// 	icon: 'twitter',
			// },
			{
				id: 4,
				link: 'https://www.instagram.com/Bellavenues/',
				title: 'Instagram',
				target: '_blank',
				username: 'superman',
				icon: 'instagram',
			},
			// {
			//   id: 5,
			//   link: "https://behance.com/",
			//   title: "Behance",
			//   target: "_blank",
			//   username: "jagmohan",
			//   icon: "behance",
			// },
		];

		return {
			menu,
			pages,
			features,
			feature1,
			images,
			companies,
			feedback,
			plans,
			websites,
		};
	}
}
