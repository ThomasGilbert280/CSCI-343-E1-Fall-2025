import Country from "../models/countries";
import Destination from "../models/destinations";

export const COUNTRIES = [
  new Country("s1", "Alabama", "#f44336"), // Red
  new Country("s2", "Florida", "#2196f3"), // Blue
  new Country("s3", "Georgia", "#4caf50"), // Green
  new Country("s4", "Kentucky", "#ff9800"), // Orange
  new Country("s5", "Louisiana", "#9c27b0"), // Purple
  new Country("s6", "Mississippi", "#ffeb3b"), // Yellow
  new Country("s7", "North Carolina", "#03a9f4"), // Light Blue
  new Country("s8", "South Carolina", "#8bc34a"), // Light Green
  new Country("s9", "Tennessee", "#ff5722"), // Deep Orange
  new Country("s10", "Virginia", "#673ab7"), // Deep Purple
];

export const DESTINATIONS = [
  new Destination(
    "c1",
    "s1",
    "Honeycomb Campground",
    50,
    1985,
    4.5,
    "https://lh3.googleusercontent.com/p/AF1QipMLPG0TdYeAusalV9npDIlqBi5Xs_NCvHlSoY9y=s1360-w1360-h1020"
  ),
  new Destination(
    "c2",
    "s2",
    "Arcadia Peace River Campground",
    30,
    1992,
    4.0,
    "https://lh3.googleusercontent.com/p/AF1QipPLHt4CcPQzydK8GZk45cp6F4OCLSrVPbEXj-7e=s1360-w1360-h1020"
  ),
  new Destination(
    "c3",
    "s3",
    "Stone Mountain Park Campground",
    40,
    1978,
    4.2,
    "https://lh3.googleusercontent.com/p/AF1QipN4BCdka5-ZGpE6lhQoGvQyuyvrDYDYRTR9mDZ9=s1360-w1360-h1020"
  ),
  new Destination(
    "c4",
    "s4",
    "Kentucky Horse Park Campground",
    60,
    2001,
    4.7,
    "https://lh3.googleusercontent.com/p/AF1QipOBnp2waOt2jqzmSeGuNr6yw6nDAdfbB_JgTS67=s1360-w1360-h1020"
  ),
  new Destination(
    "c5",
    "s5",
    "Hidden Oaks Campground",
    25,
    1988,
    3.8,
    "https://lh3.googleusercontent.com/p/AF1QipMKwVkZ66ndyrSL8HNshOPfuFIh6PC8-2OhUJaa=s1360-w1360-h1020"
  ),
  new Destination(
    "c6",
    "s6",
    "Little Black Creek Campground",
    35,
    1995,
    4.1,
    "https://lh3.googleusercontent.com/p/AF1QipMLVH4hUp3VXYReamqUsz1Ljonh76eIal4I4yZZ=s1360-w1360-h1020"
  ),
  new Destination(
    "c7",
    "s7",
    "Camp Hatteras RV Resort & Campground",
    45,
    1975,
    4.3,
    "https://lh3.googleusercontent.com/p/AF1QipPl_SZNGGy5UrPSTdFEklkVUMi8YF5d3WtBKgsu=s1360-w1360-h1020"
  ),
  new Destination(
    "c8",
    "s8",
    "Table Rock State Park",
    55,
    2003,
    4.6,
    "https://lh3.googleusercontent.com/p/AF1QipNiyUDf100wuxMTsu3OEvAbJ188WBsoVp3FBrs=s1360-w1360-h1020"
  ),
  new Destination(
    "c9",
    "s9",
    "Fall Creek Falls State Park",
    20,
    1982,
    3.9,
    "https://lh3.googleusercontent.com/p/AF1QipOCc6Y1AUqBnXfuL3LVNNso5wCKCjsSQatGwKeq=s1360-w1360-h1020"
  ),
  new Destination(
    "c10",
    "s10",
    "Hungry Mother State Park",
    65,
    1998,
    4.8,
    "https://lh3.googleusercontent.com/p/AF1QipOOqLSYYgNwxkCHrEgC6AD76Oppmkup2dUtYC_L=s1360-w1360-h1020"
  ),
  new Destination(
    "c11",
    "s1",
    "Lake Guntersville State Park Campground",
    40,
    1979,
    4.2,
    "https://lh3.googleusercontent.com/p/AF1QipPaKHoIPvRZtgQFXX-v0JS3elhZOQAEcR4EtB3L=s1360-w1360-h1020"
  ),
  new Destination(
    "c12",
    "s2",
    "Jetty Park Campground",
    35,
    1987,
    4.3,
    "https://lh3.googleusercontent.com/p/AF1QipOyfO-CtM3qY-_U2Lh_vXeJT-JDWF1Peo60-Jx6=s1360-w1360-h1020"
  ),
  new Destination(
    "c13",
    "s3",
    "Reed Bingham State Park - Campground",
    50,
    1993,
    4.6,
    "https://lh3.googleusercontent.com/p/AF1QipOVLpVlPFaMs5PqZkTV1Xp4sag6DeD4a1sETsrg=s1360-w1360-h1020"
  ),
  new Destination(
    "c14",
    "s4",
    "Red River Gorge Campground",
    30,
    1981,
    4.0,
    "https://lh3.googleusercontent.com/p/AF1QipN5RttKwNWNLak8YyI-YK3iJkljMbr6dFAQF3Bk=s1360-w1360-h1020"
  ),
  new Destination(
    "c15",
    "s5",
    "Indian Creek Campground",
    45,
    1996,
    4.5,
    "https://lh3.googleusercontent.com/p/AF1QipNy_bOjBzIttqJX-T_sTC6_ezMe4hmE1K1myOwG=s1360-w1360-h1020"
  ),
  new Destination(
    "c16",
    "s6",
    "Piney Grove Campground",
    55,
    2005,
    4.7,
    "https://lh3.googleusercontent.com/p/AF1QipOk70Jg5ROVIeFFkWUcLEI1aWtuQWlz3-sna6dQ=s1360-w1360-h1020"
  ),
  new Destination(
    "c17",
    "s7",
    "Frisco Woods Campgrounds Inc",
    25,
    1989,
    3.8,
    "https://lh3.googleusercontent.com/p/AF1QipPBKwR-aaXqBBJV7jZhu68yyAgi2a2K-teX3K4K=s1360-w1360-h1020"
  ),
  new Destination(
    "c18",
    "s8",
    "Huntington Beach State Park",
    60,
    1999,
    4.9,
    "https://lh3.googleusercontent.com/p/AF1QipNPOTpDCJCUExeJKRS3AJIivH9awUxSQOExnuja=s1360-w1360-h1020"
  ),
  new Destination(
    "c19",
    "s9",
    "David Crockett State Park",
    30,
    1977,
    3.5,
    "https://lh3.googleusercontent.com/p/AF1QipN1UpPQNu6nZ7wgTW9WSfWmoGyKSLffNCJ8PhDg=s1360-w1360-h1020"
  ),
  new Destination(
    "c20",
    "s10",
    "Fairy Stone State Park",
    40,
    1990,
    4.4,
    "https://lh3.googleusercontent.com/p/AF1QipMMC9ncqLd5gz6rK6uLVv-AM52frv20rwOi-5eM=s1360-w1360-h1020"
  ),
];
