
import React from 'react';
import PageLayout from '@/components/PageLayout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card } from '@/components/ui/card';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const Contact = () => {
  return (
    <PageLayout title="Contact Us">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-xl font-semibold mb-4">Get in Touch</h2>
          <p className="text-gray-600 mb-6">
            Have questions about our work or how you can help? Fill out the form and we'll get back to you as soon as possible.
          </p>
          
          <form className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Name
                </label>
                <Input id="name" placeholder="Your name" />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <Input id="email" type="email" placeholder="Your email" />
              </div>
            </div>
            
            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                Subject
              </label>
              <Input id="subject" placeholder="Subject of your message" />
            </div>
            
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                Message
              </label>
              <Textarea id="message" placeholder="Your message" rows={5} />
            </div>
            
            <Button type="submit" className="w-full bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600">
              Send Message
            </Button>
          </form>
        </div>
        
        <div>
          <h2 className="text-xl font-semibold mb-4">Contact Information</h2>
          <p className="text-gray-600 mb-6">
            You can also reach us using the following contact information or visit us at our office.
          </p>
          
          <div className="space-y-4">
            <Card className="p-4 flex items-start">
              <MapPin className="text-orange-500 mr-3 mt-1" />
              <div>
                <h3 className="font-medium">Address</h3>
                <p className="text-gray-600">123 Charity Lane, Sector 15, New Delhi, 110001, India</p>
              </div>
            </Card>
            
            <Card className="p-4 flex items-start">
              <Phone className="text-orange-500 mr-3 mt-1" />
              <div>
                <h3 className="font-medium">Phone</h3>
                <p className="text-gray-600">+91 11 2345 6789</p>
                <p className="text-gray-600">+91 98765 43210 (Helpline)</p>
              </div>
            </Card>
            
            <Card className="p-4 flex items-start">
              <Mail className="text-orange-500 mr-3 mt-1" />
              <div>
                <h3 className="font-medium">Email</h3>
                <p className="text-gray-600">info@sevasanstha.org</p>
                <p className="text-gray-600">donate@sevasanstha.org</p>
              </div>
            </Card>
            
            <Card className="p-4 flex items-start">
              <Clock className="text-orange-500 mr-3 mt-1" />
              <div>
                <h3 className="font-medium">Office Hours</h3>
                <p className="text-gray-600">Monday - Friday: 9:00 AM - 6:00 PM</p>
                <p className="text-gray-600">Saturday: 10:00 AM - 2:00 PM</p>
                <p className="text-gray-600">Sunday: Closed</p>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default Contact;
