import axios from "axios";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  FormControl,
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { paths } from "@/configuration";
import { useState } from "react";

const LoginPage = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm({
    defaultValues: {
      userName: "",
      password: "",
    },
  });

  const loginUserMutation = async (values) => {
    axios.post("/api/login", values);
  };

  const onSubmit = async (data) => {
    try {
      setIsLoading(true);
      await loginUserMutation(data);
    } catch (err) {
      console.log(err?.message);
    } finally {
      setIsLoading(false);
      navigate(paths.dashboard);
    }
  };

  return (
    <div className="w-full justify-around items-center flex gap-8">
      <div>
        <h1 className="text-5xl font-bold mb-4">Logo</h1>
        <h2 className="text-2xl">The first finance helper in Algeria!</h2>
      </div>
      <Card className="min-w-[400px] p-2">
        <CardHeader className="text-center">
          <CardTitle className="text-xl">Welcome back</CardTitle>
          <CardDescription>Login to your account and enjoy!</CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <FormField
                control={form.control}
                name="userName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>User Name</FormLabel>
                    <FormControl>
                      <Input placeholder="example@gmail.com" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                      <Input
                        type="password"
                        placeholder="Enter your password"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button className="w-full">
                {isLoading ? "Loading..." : "Login"}
              </Button>
            </form>
          </Form>
          <p className="text-sm mt-2">
            Don&apos;t have an account yet?{" "}
            <Link className="text-blue-600" to={paths.auth.register}>
              register
            </Link>
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default LoginPage;
