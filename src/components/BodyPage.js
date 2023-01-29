import React from "react";
import { Observer, useLocalStore } from "mobx-react";
import { store } from "../Store";
import { H5Game } from "./H5Game";
import { DevTool } from "./DevTool";
import { Experience } from "./Experience";
import { Skill } from "./Skill";

export function BodyPage() {
  const localStore = useLocalStore(() => store);
  return (
    <Observer>
      {() => {
        switch (localStore.body) {
          case "H5Game":
            return <H5Game></H5Game>;
          case "DevTool":
            return <DevTool></DevTool>;
          case "Experience":
            return <Experience></Experience>;
          case "Skill":
            return <Skill></Skill>;
          default:
            return <div></div>;
        }
      }}
    </Observer>
  );
}
