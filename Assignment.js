mport React from "react";
import { Button } from "./components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./components/ui/card";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "./components/ui/accordion";

export default function ModernUILayout() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      {/* Hero Section */}
      <section className="text-center py-20 px-4 bg-gradient-to-br from-indigo-600 to-blue-500 text-white">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Design Better Interfaces</h1>
        <p className="text-lg md:text-xl mb-6">Build fast, beautiful, and accessible UIs effortlessly</p>
        <Button className="bg-white text-indigo-600 font-semibold hover:bg-gray-100">Get Started</Button>
      </section>

      {/* Features Section */}
      <section className="py-16 px-6 max-w-6xl mx-auto grid gap-10 md:grid-cols-3">
        {['Responsive Design', 'Reusable Components', 'Easy Customization'].map((feature, idx) => (
          <Card key={idx} className="shadow-md">
            <CardHeader>
              <CardTitle>{feature}</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Learn how to implement {feature.toLowerCase()} using TailwindCSS and ShadCN UI tools.</p>
            </CardContent>
          </Card>
        ))}
      </section>

      {/* Testimonials Section */}
      <section className="py-12 px-6 bg-white max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">What Developers Say</h2>
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger>"The most practical UI workshop I've attended!"</AccordionTrigger>
            <AccordionContent>
              It made modern UI concepts so easy to understand and apply. Loved the tools we used.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>"TailwindCSS and ShadCN are a game changer!"</AccordionTrigger>
            <AccordionContent>
              This workshop showed me how to build interfaces that not only look great but also scale well.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </section>

      {/* Footer Section */}
      <footer className="py-6 text-center text-sm text-gray-600 bg-gray-100">
        <p>&copy; 2025 Modern UI Workshop. All rights reserved.</p>
        <div className="mt-2 flex justify-center space-x-4">
          <a href="#" className="hover:underline">About</a>
          <a href="#" className="hover:underline">Contact</a>
          <a href="#" className="hover:underline">Privacy Policy</a>
        </div>
      </footer>
    </div>
  );
}
