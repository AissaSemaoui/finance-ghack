import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import axios from "axios";

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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Link } from "react-router-dom";
import { paths } from "@/configuration";
import { useState } from "react";

const RegisterPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const form = useForm({
    defaultValues: {
      name: "",
      email: "",
      password: "",
      user_type: "user",
    },
  });

  const registerUserMutation = async (values) =>
    axios.post("/api/register", {
      userName: values.name,
      userPassword: values.password,
      email: values.email,
    });

  const registerExpertMutation = async (values) =>
    axios.post("/api/admin/registerExpert", {
      expertName: values.name,
      expertPassword: values.password,
      expertEmail: values.email,
      expertImage: "",
      expertWorkingAt: "Finance Consultancy",
    });

  const onSubmit = async (values) => {
    try {
      setIsLoading(true);
      const { user_type, ...data } = values;

      console.log(data, user_type);

      if (user_type === "expert") {
        return await registerExpertMutation(data);
      }

      return await registerUserMutation(data);
    } catch (err) {
      console.log("we just got an error!", err?.message);
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
          <CardTitle className="text-xl">Welcome</CardTitle>
          <CardDescription>Create a new account and enjoy!</CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Full Name</FormLabel>
                    <FormControl>
                      <Input placeholder="example@gmail.com" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
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
              <FormField
                control={form.control}
                name="user_type"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>User type</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select a verified email to display" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="user">Business Owner</SelectItem>
                        <SelectItem value="expert">
                          Finance Consultant
                        </SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button className="w-full">
                {isLoading ? "Loading..." : "Register"}
              </Button>
            </form>
          </Form>
          <p className="text-sm mt-2">
            Already have an account?{" "}
            <Link className="text-blue-600" to={paths.auth.login}>
              login
            </Link>
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default RegisterPage;
