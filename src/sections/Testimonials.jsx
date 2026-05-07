import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { act, useState } from "react";

const testimonials = [
    {
        quote: "Sandeep is one of the most talented engineers I've worked with. He has a keen eye for design and a deep understanding of user experience. I highly recommend him for any project that requires a modern and user-friendly interface.",
        author: "Sarah Chen",
        role: "CEO, Tech Innovators INC",
        avatar: "https://images.unsplash.com/photo-1499714608240-22fc6ad53fb2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    },
     {
        quote: "Sandeep is one of the most talented engineers I've worked with. He has a keen eye for design and a deep understanding of user experience. I highly recommend him for any project that requires a modern and user-friendly interface.",
        author: "Vishal rawat",
        role: "CEO, Tech mahindra INC",
        avatar: "https://plus.unsplash.com/premium_photo-1689530775582-83b8abdb5020?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cmFuZG9tJTIwcGVyc29ufGVufDB8fDB8fHww",
    },
     {
        quote: "Sandeep is one of the most talented engineers I've worked with. He has a keen eye for design and a deep understanding of user experience. I highly recommend him for any project that requires a modern and user-friendly interface.",
        author: "Aman Chaudhary",
        role: "CEO, Infotech INC",
        avatar: "https://media.gettyimages.com/id/1752533660/video/happy-worker-and-face-of-business-asian-man-in-office-with-pride-confidence-and-ambition-in.jpg?s=640x640&k=20&c=FPPyepfVwPRmGudzLY-RkfVPiT1lPE_wBZ2WQZVGUOM=",
    },
     {
        quote: "Sandeep is one of the most talented engineers I've worked with. He has a keen eye for design and a deep understanding of user experience. I highly recommend him for any project that requires a modern and user-friendly interface.",
        author: "Rakesh Gupta",
        role: "CEO, Microsoft INC",
        avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkMob1-YTQ88pGrZEONawNkVTdnkThgzVRDQ&s",
    },
        
    
]

export const Testimonials = () =>{

    const [activeIdx, setActiveIdx] = useState(0);
    const next = () => {
        setActiveIdx((prev) => (prev + 1) % testimonials.length)
    }

    const previous = () => {
      setActiveIdx((prev) => (prev - 1 + testimonials.length) % testimonials.length)
    }

    return (
    <section id="testimonials"
    className="py-32 relative overflow-hidden">

        <div className="absolute top-1/2 left-1/2
        w-[800px] h-[800px] bg-primary/5
        rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"/>
        <div className="container mx-auto
        px-6 relative z-10">
            {/* Section header */}
            <div className="text-center max-w-3xl mx-auto mb-16">
                <span className="text-secondary-foreground text-sm
                font-medium tracking-wider uppercase animate-fade-in">
                    What People Say
                </span>
                <h2 className="text-4xl md:text-5xl font-bold
                mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
                    Kind words from{" "}
                    <span className="font-serif italic font-normal text-white">
                        amazing people.
                    </span>
                </h2>
            </div>
            {/* Testimonial carausel */}
            <div className="max-w-4xl mx-auto">
                <div className="relative">
                    {/* Main testimonial */}
                    <div className="glass p-8 rounded-3xl md:p-12 glow-border animate-fade-in animation-delay-200">
                        <div className="absolute -top-4 left-8 w-12 h-12 rounded-full bg-primary flex items-center justify-around">
                            <Quote className="w-6 h-6 text-primary-foreground"/>
                        </div>

                        <blockquote className="text-xl md:text-2xl font-medium leading-relaxed mb-8 pt-4">
                            "{testimonials[activeIdx].quote}"
                        </blockquote>

                        <div className="flex items-center gap-4">
                            <img 
                            src={testimonials[activeIdx].avatar} 
                            alt={testimonials[activeIdx].author}
                            className="w-14 h-14 rounded-full object-cover ring-2 ring-primary/20"
                            /> 
                            <div>
                                <div className="font-semibold">{testimonials[activeIdx].author}</div>
                                <div className="text-sm text-muted-foreground">{testimonials[activeIdx].role}</div>
                            </div>
                       </div>
                    </div>
                </div>
{/* Testimonial naviagation */}

        <div className="flex items-center justify-center gap-4 mt-8">
            <button className="p-3 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all" 
            onClick={previous}>
                <ChevronLeft />            
            </button>
            <div className="flex gap-2">
                {testimonials.map((_, idx) => (
                <button 
                onClick={() => setActiveIdx(idx)}
                className={`w-2 h-2 rounded-full transition-all duration-300
                     ${idx === activeIdx ? "w-8 bg-primary" : "bg-muted-foreground/30 hover:bg-muted-foreground/50"}`} />
            ))}
            </div>
            <button className="p-3 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all" 
            onClick={next}>
             <ChevronRight />            
            </button>
        </div>
      </div>
    </div>
       
    </section>
)};