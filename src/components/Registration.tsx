import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { QrCode, ExternalLink, Phone, Mail, User, Sparkles, Clock, CheckCircle } from "lucide-react";

const Registration = () => {
  const contacts = [
    {
      name: "Swapnil Gramopadhye",
      phone: "+91 97667 03147",
      role: "Faculty Co-Ordinator",
      icon: User,
      gradient: "from-blue-500/20 to-blue-600/10"
    },
    {
      name: "Prachi Pathak", 
      phone: "+91 91588 39366",
      role: "Faculty Co-Ordinator",
      icon: User,
      gradient: "from-purple-500/20 to-purple-600/10"
    },
    {
      name: "Unknown",
      phone: "Unknown", 
      role: "Student Co-Ordinator",
      icon: User,
      gradient: "from-green-500/20 to-green-600/10"
    }
  ];

  return (
    <section className="py-32 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-background/60 via-transparent to-background/60" />
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-accent-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-accent-secondary/10 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-24 animate-slide-up">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-neutral-800/50 to-neutral-700/50 border border-accent-primary/20 rounded-full px-4 py-2 text-accent-primary text-sm backdrop-blur-sm mb-6">
            <Clock className="w-4 h-4" />
            <span>Limited Time Registration</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-light mb-8 tracking-tight">
            <span className="font-mono bg-gradient-to-r from-accent-secondary to-accent-primary bg-clip-text text-transparent">Register</span> Now
          </h2>
          <p className="text-xl text-neutral-400 max-w-3xl mx-auto font-light leading-relaxed">
            Secure your spot in this prestigious national-level coding competition
          </p>
          <div className="w-24 h-px bg-gradient-to-r from-transparent via-accent-primary to-transparent mx-auto mt-8" />
        </div>

        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-start">
          {/* Enhanced Registration Card */}
          <div className="relative group">
            {/* Glow effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-accent-primary/20 to-accent-secondary/20 rounded-3xl blur-2xl opacity-60 group-hover:opacity-100 transition-all duration-500" />
            
            <Card className="relative bg-card/90 border border-accent-primary/30 backdrop-blur-sm group-hover:border-accent-primary/50 transition-all duration-500">
              <CardHeader className="text-center relative">
                <div className="absolute top-4 right-4">
                  <Sparkles className="w-6 h-6 text-accent-secondary animate-pulse" />
                </div>
                <CardTitle className="text-3xl font-light mb-6">
                  Join the <span className="bg-gradient-to-r from-accent-primary to-accent-secondary bg-clip-text text-transparent font-audiowide">Codathon</span>
                </CardTitle>
                <p className="text-lg text-neutral-300 font-light">
                  Register through our official partner platform
                </p>
              </CardHeader>
              <CardContent className="space-y-10">
                {/* Enhanced QR Code Section */}
                <div className="flex justify-center">
                  <div className="relative group/qr">
                    <div className="absolute inset-0 bg-gradient-to-r from-accent-primary/30 to-accent-secondary/30 rounded-2xl blur-lg group-hover/qr:blur-xl transition-all duration-300" />
                    <div className="relative w-48 h-48 bg-white border-2 border-accent-primary/30 rounded-2xl flex items-center justify-center group-hover/qr:scale-105 transition-all duration-300 p-4">
                      <img 
                        src="/qr-code.png" 
                        alt="Registration QR Code - Scan to register for Codathon 2k25" 
                        className="w-full h-full object-contain rounded-lg"
                      />
                    </div>
                    <div className="text-center mt-4">
                      <p className="text-sm text-accent-primary font-medium">Scan QR Code to Register</p>
                      <div className="w-12 h-px bg-gradient-to-r from-transparent via-accent-primary to-transparent mx-auto mt-2" />
                    </div>
                  </div>
                </div>

                {/* Enhanced Registration Button */}
                <div className="text-center space-y-6">
                  <div className="relative group/btn">
                    <div className="absolute inset-0 bg-gradient-to-r from-accent-primary to-accent-secondary rounded-xl blur-lg group-hover/btn:blur-xl transition-all duration-300 opacity-70" />
                    <Button 
                      variant="default" 
                      size="lg" 
                      className="relative w-full py-4 text-lg bg-gradient-to-r from-accent-primary to-accent-secondary hover:from-accent-primary/90 hover:to-accent-secondary/90 text-white font-medium rounded-xl transition-all duration-300 group-hover/btn:scale-105 shadow-xl"
                      onClick={() => window.open('https://unstop.com/p/code-marathon-2k24-annasaheb-dange-college-of-engineering-and-technology-1151369', '_blank')}
                    >
                      <ExternalLink className="w-5 h-5 mr-3 group-hover/btn:scale-110 transition-transform duration-300" />
                      Register on Unstop
                    </Button>
                  </div>
                  <p className="text-sm text-neutral-400">
                    🔒 Quick, secure, and completely free registration
                  </p>
                </div>

                {/* Enhanced Steps */}
                <div className="space-y-6 pt-6 border-t border-neutral-700/50">
                  <h4 className="font-medium text-foreground text-lg flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-accent-secondary" />
                    Registration Process
                  </h4>
                  <div className="space-y-4">
                    {[
                      "Access registration link",
                      "Complete personal details", 
                      "Verify academic status",
                      "Submit application"
                    ].map((step, index) => (
                      <div key={index} className="flex items-center gap-4 group/step hover:translate-x-2 transition-transform duration-200">
                        <div className="w-8 h-8 rounded-xl bg-gradient-to-r from-accent-primary/20 to-accent-secondary/20 border border-accent-primary/30 text-accent-primary text-sm font-bold flex items-center justify-center group-hover/step:scale-110 transition-transform duration-200">
                          {index + 1}
                        </div>
                        <p className="text-neutral-300 font-light group-hover/step:text-neutral-200 transition-colors duration-200">{step}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Enhanced Contact Information */}
          <div className="space-y-8">
            <div className="text-center lg:text-left">
              <h3 className="text-3xl font-light text-foreground mb-4">
                <span className="bg-gradient-to-r from-accent-primary to-accent-secondary bg-clip-text text-transparent">Contact</span> Information
              </h3>
              <p className="text-neutral-400 font-light">
                Need help? Reach out to our coordinators
              </p>
              <div className="w-16 h-px bg-gradient-to-r from-accent-primary to-transparent mt-4 mx-auto lg:mx-0" />
            </div>
            
            {contacts.map((contact, index) => {
              const IconComponent = contact.icon;
              return (
                <div key={index} className="relative group">
                  {/* Glow effect */}
                  <div className={`absolute inset-0 bg-gradient-to-r ${contact.gradient} rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500`} />
                  
                  <Card className="relative bg-card/80 border border-border backdrop-blur-sm group-hover:border-accent-primary/30 transition-all duration-500 hover:scale-105">
                    <CardContent className="p-8">
                      <div className="flex items-center gap-6">
                        <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${contact.gradient} border border-neutral-600/50 flex items-center justify-center group-hover:scale-110 transition-all duration-300 relative`}>
                          <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${contact.gradient} blur-md opacity-50`} />
                          <IconComponent className="w-8 h-8 text-accent-primary relative z-10 group-hover:rotate-12 transition-transform duration-300" />
                        </div>
                        <div className="flex-1">
                          <h4 className="text-xl font-medium text-foreground group-hover:text-accent-primary transition-colors duration-300">{contact.name}</h4>
                          <p className="text-neutral-400 mb-3 font-light">{contact.role}</p>
                          <div className="flex items-center gap-3">
                            <div className="p-2 rounded-lg bg-accent-secondary/20 border border-accent-secondary/30">
                              <Phone className="w-4 h-4 text-accent-secondary" />
                            </div>
                            <a 
                              href={`tel:${contact.phone}`}
                              className="text-neutral-300 hover:text-accent-primary transition-colors duration-300 font-medium group-hover:translate-x-1"
                            >
                              {contact.phone}
                            </a>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              );
            })}

            {/* Enhanced Support Info */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-accent-primary/20 to-accent-secondary/20 rounded-2xl blur-xl opacity-60 group-hover:opacity-100 transition-all duration-500" />
              
              <Card className="relative bg-card/90 border border-accent-primary/30 backdrop-blur-sm">
                <CardContent className="p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-3 rounded-full bg-gradient-to-r from-accent-primary/20 to-accent-secondary/20 border border-accent-primary/30">
                      <Mail className="w-6 h-6 text-accent-primary" />
                    </div>
                    <h4 className="text-xl font-medium text-foreground">Need Assistance?</h4>
                  </div>
                  <p className="text-neutral-300 font-light mb-6 leading-relaxed">
                    Our coordinators are available to help with registration queries and provide technical support throughout the competition.
                  </p>
                  <div className="flex flex-wrap gap-3">
                    <span className="text-sm bg-gradient-to-r from-accent-primary/20 to-accent-primary/10 text-accent-primary px-4 py-2 rounded-full border border-accent-primary/30">
                      Registration Help
                    </span>
                    <span className="text-sm bg-gradient-to-r from-accent-secondary/20 to-accent-secondary/10 text-accent-secondary px-4 py-2 rounded-full border border-accent-secondary/30">
                      Technical Support
                    </span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Registration;