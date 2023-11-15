import express from "express";

import { Express } from "../express";
import { Logger } from "../platform/logger";
import { Locals } from "../locals";
import { Routes } from "../routes";

import { IJhhApp } from "@models/providers";
import { JhhApp } from "./jhh-app";

describe("JhhApp", () => {
  let sut: IJhhApp;

  const getSut = () => {
    return new JhhApp(express(), express.Router());
  };

  test("✅ should be defined", () => {
    sut = getSut();

    expect(sut).toBeDefined();
  });

  describe("initServer", () => {
    test("✅ should be defined", () => {
      sut = getSut();

      expect(sut.initServer).toBeDefined();
    });
  });
});
