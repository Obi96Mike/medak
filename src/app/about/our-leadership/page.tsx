import Container from "@/components/container";
import MiniHero from "@/components/sections/mini-hero";
import SingleCommiteeMemberCard from "@/components/single-commitee-member-card";
import SingleLeadershipMemberCard from "@/components/single-leadership-member-card";
import { Button } from "@/components/ui/button";
import ImageContaier from "@/components/ui/image-container";
import Link from "next/link";
import React from "react";
import { LuLinkedin } from "react-icons/lu";

const OurLeadership = () => {
  const management = [
    {
      name: "Steve Kipkoti",
      position: "Chairperson",
      image: "",
      bio: "",
      linkedin: "https://www.linkedin.com/in/nelly-bosire-7b0b7a1b/",
      twitter: "https://twitter.com/nellybosire",
      email: "mailto:info@mail.com",
    },
    {
      name: "Mary Kinyanjui",
      position: "vice-chairperson",
      image: "",
      bio: "",
      linkedin: "https://www.linkedin.com/in/nelly-bosire-7b0b7a1b/",
      twitter: "https://twitter.com/nellybosire",
      email: "mailto:info@mail.com",
    },
    {
      name: "Njoki Mwangi",
      position: "Treasurer",
      image: "",
      bio: "",
      linkedin: "https://www.linkedin.com/in/nelly-bosire-7b0b7a1b/",
      twitter: "https://twitter.com/nellybosire",
      email: "mailto:info@mail.com",
    },
    {
      name: "Christopher Odero",
      position: "Secretary",
      image: "/images/headshots/christopher-odero.png",
      bio: "Dr. Nelly Bosire is the Chairperson of the Medical Device Association of Kenya (MEDAK). She is the Founder and CEO of the Kenyan based company, MedSource Group, which provides medical devices, equipment, and supplies to the healthcare industry in Kenya and East Africa. She is also the Founder and CEO of the MedSource Foundation, a non-profit organization that provides medical devices and supplies to underserved communities in Kenya. Dr. Bosire is a trained medical doctor and has a Master’s degree in Public Health from the University of Liverpool. She is passionate about improving access to quality healthcare in Kenya and Africa.",
      linkedin: "https://www.linkedin.com/in/nelly-bosire-7b0b7a1b/",
      twitter: "https://twitter.com/nellybosire",
      email: "mailto:info@mail.com",
    },
    {
      name: "Maureen Njeri",
      position: "Administrative assistant",
      image: "",
      bio: "",
      linkedin: "https://www.linkedin.com/in/nelly-bosire-7b0b7a1b/",
      twitter: "https://twitter.com/nellybosire",
      email: "mailto:info@mail.com",
    },
  ];

  const committees = [
    {
      name: "Trade, Policy and Regulations",
      members: [
        {
          name: "Margaret Mulwa",
          image: "",
          bio: "",
          linkedin: "https://www.linkedin.com/in/nelly-bosire-7b0b7a1b/",
          twitter: "https://twitter.com/nellybosire",
          email: "mailto:info@mail.com",
        },
        {
          name: "DR. David Karenye",
          image: "",
          bio: "",
          linkedin: "https://www.linkedin.com/in/nelly-bosire-7b0b7a1b/",
          twitter: "https://twitter.com/nellybosire",
          email: "mailto:info@mail.com",
        },
      ],
    },
    {
      name: "Legal and Compliance",
      members: [
        {
          name: "Brenton Okubasu",
          image: "",
          bio: "",
          linkedin: "https://www.linkedin.com/in/nelly-bosire-7b0b7a1b/",
          twitter: "https://twitter.com/nellybosire",
          email: "mailto:info@mail.com",
        },
      ],
    },
    {
      name: "Government Affairs",
      members: [
        {
          name: "Steve Kipkoti",
          image: "",
          bio: "",
          linkedin: "https://www.linkedin.com/in/nelly-bosire-7b0b7a1b/",
          twitter: "https://twitter.com/nellybosire",
          email: "mailto:info@mail.com",
        },
        {
          name: "Mary Wangui",
          image: "",
          bio: "",
          linkedin: "https://www.linkedin.com/in/nelly-bosire-7b0b7a1b/",
          twitter: "https://twitter.com/nellybosire",
          email: "mailto:info@mail.com",
        },
      ],
    },
    {
      name: "Public Relations and Communications",
      members: [
        {
          name: "Dr. Adams Mogeni",
          image: "",
          bio: "",
          linkedin: "https://www.linkedin.com/in/nelly-bosire-7b0b7a1b/",
          twitter: "https://twitter.com/nellybosire",
          email: "mailto:info@mail.com",
        },
        {
          name: "Njoki Mwangi",
          image: "/images/headshots/njoki-mwangi.png",
          bio: "lorem",
          linkedin: "https://www.linkedin.com/in/nelly-bosire-7b0b7a1b/",
          twitter: "https://twitter.com/nellybosire",
          email: "mailto:info@mail.com",
        },
      ],
    },
  ];
  return (
    <div>
      <MiniHero title={"Our Leadership"} subTitle={"Our Leadership"} />
      <Container>
        <div className="mt-6">
          <h1 className="text-4xl font-bold mb-6">
            Secretariate or Management
          </h1>
          <div className="grid grid-cols-2 sm:grid-cols-3  md:grid-cols-4 gap-10">
            {management.map((item, index) => (
              // <div key={index} className="group">
              //   <div className="">
              //     <ImageContaier
              //       ratio={1}
              //       alt="image"
              //       imageURL={item.image ? item.image : "/user-placeholder.png"}
              //       object="cover"
              //     />
              //   </div>
              //   <div className="mt-3">
              //     <h3 className="text-primary font-bold group-hover:underline">
              //       {item.name}
              //     </h3>
              //     <p className="text-sm font-semibold">{item.position}</p>
              //   </div>
              // </div>
              <SingleLeadershipMemberCard
                key={index}
                name={item.name}
                imageURL={item.image}
                position={item.position}
                bio={item.bio}
              />
            ))}
          </div>
        </div>

        {/* committees */}
        <div className="mt-8">
          <h1 className="text-4xl font-bold mb-6">Committees</h1>
          {committees.map((commitee, index) => (
            <div className="mt-6" key={index}>
              <h1 className="text-xl font-bold mb-6">
                {commitee.name} committee
              </h1>
              <div className="grid grid-cols-2 sm:grid-cols-3  md:grid-cols-4 gap-10">
                {commitee.members.map((item, index) => (
                  <SingleCommiteeMemberCard
                    key={index}
                    name={item.name}
                    imageURL={item.image}
                    bio={item.bio}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default OurLeadership;
