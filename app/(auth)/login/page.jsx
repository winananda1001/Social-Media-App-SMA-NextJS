"use client";
import { Button, TextField, Typography } from "@mui/material";
import classes from "../../../css/Auth.module.css";
import Link from "next/link";
import Image from "next/image";

const Login = () => {
  return (
    <section className={classes.auth_section}>
      <div className={classes.empty_div}></div>
      <div className={classes.form_div}>
        <Typography color="#333" variant="h4" fontWeight="bold">
          LOGIN
        </Typography>
        <Typography color="textSecondary" variant="p">
          Join our community today by filling out our simple login form and
          start enjoying exclusive benefits
        </Typography>
        <form className={classes.form}>
          <TextField placeholder="example@gmail.com" label="Email" />
          <TextField placeholder="****" label="Password" />
          <div className={classes.actions}>
            <div className={classes.google}>
              <Image
                src="/images/search.png"
                alt="google"
                width={30}
                height={30}
              />
            </div>
            <Button
              type="submit"
              size="large"
              variant="contained"
              sx={{ backgroundColor: "#006ccf", width: "100%" }}
            >
              Login
            </Button>
          </div>
        </form>
        <Typography>
          Don't have account? <Link href="/signup">Click here</Link>
        </Typography>
      </div>
    </section>
  );
};

export default Login;
