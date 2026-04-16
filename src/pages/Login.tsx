import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { LogIn, MessageSquare } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate login network request
    setTimeout(() => {
      setIsLoading(false);
      if (email && password) {
        toast({
          title: "مرحباً بك مجدداً!",
          description: "تم تسجيل الدخول بنجاح.",
        });
        navigate("/");
      } else {
        toast({
          variant: "destructive",
          title: "فشل تسجيل الدخول",
          description: "يرجى إدخال البريد الإلكتروني وكلمة المرور.",
        });
      }
    }, 1000);
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center bg-background p-4 overflow-hidden">
      <div className="relative w-full max-w-md">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,hsl(var(--primary)/0.12),transparent_55%)]"
        />
        
    

        {/* Login Card */}
        <Card className="rounded-xl border-border/80 transition-shadow duration-300 hover:shadow-md">
          <CardHeader className="space-y-1 pb-6 px-6 pt-6 text-center">
            <CardTitle className="text-lg font-bold">تسجيل الدخول</CardTitle>
            <CardDescription className="text-xs text-muted-foreground">
              أدخل بريدك الإلكتروني وكلمة المرور للوصول إلى حسابك
            </CardDescription>
          </CardHeader>
          <CardContent className="px-6">
            <form onSubmit={handleLogin} className="space-y-5">
              <div className="space-y-2 text-right">
                <Label htmlFor="email" className="font-medium text-sm text-foreground">
                  البريد الإلكتروني
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="name@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  dir="ltr"
                  className="bg-background border-border/70 focus-visible:ring-primary h-11 text-right"
                />
              </div>
              <div className="space-y-2 text-right">
                <div className="flex items-center justify-between">
                  <Label htmlFor="password" className="font-medium text-sm text-foreground">
                    كلمة المرور
                  </Label>
                  <a
                    href="#"
                    className="text-xs font-medium text-primary hover:text-primary/80 transition-colors duration-300"
                  >
                    نسيت كلمة المرور؟
                  </a>
                </div>
                <Input
                  id="password"
                  type="password"
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  dir="ltr"
                  className="bg-background border-border/70 focus-visible:ring-primary h-11 text-right"
                />
              </div>
              <Button
                type="submit"
                className="w-full h-11 text-sm font-medium shadow-sm transition-all duration-300 ease-out hover:shadow-md active:scale-[0.98] mt-2"
                disabled={isLoading}
              >
                {isLoading ? (
                  <div className="flex items-center gap-2">
                    <div className="h-4 w-4 animate-spin rounded-full border-2 border-white/20 border-t-white" />
                    <span>جاري تسجيل الدخول...</span>
                  </div>
                ) : (
                  <>
                    <LogIn className="w-4 h-4 ml-2" />
                    <span>تسجيل الدخول</span>
                  </>
                )}
              </Button>
            </form>
          </CardContent>
  
        </Card>

      </div>
    </div>
  );
};

export default Login;
