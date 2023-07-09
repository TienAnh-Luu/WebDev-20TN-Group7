"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const items = [
      {
        post_id: 1,
        tag_id: 79,
      },
      {
        post_id: 1,
        tag_id: 86,
      },
      {
        post_id: 1,
        tag_id: 93,
      },
      {
        post_id: 1,
        tag_id: 38,
      },
      {
        post_id: 2,
        tag_id: 233,
      },
      {
        post_id: 2,
        tag_id: 45,
      },
      {
        post_id: 2,
        tag_id: 53,
      },
      {
        post_id: 2,
        tag_id: 217,
      },
      {
        post_id: 2,
        tag_id: 169,
      },
      {
        post_id: 3,
        tag_id: 79,
      },
      {
        post_id: 3,
        tag_id: 33,
      },
      {
        post_id: 3,
        tag_id: 72,
      },
      {
        post_id: 3,
        tag_id: 86,
      },
      {
        post_id: 3,
        tag_id: 87,
      },
      {
        post_id: 4,
        tag_id: 250,
      },
      {
        post_id: 4,
        tag_id: 249,
      },
      {
        post_id: 4,
        tag_id: 144,
      },
      {
        post_id: 4,
        tag_id: 209,
      },
      {
        post_id: 5,
        tag_id: 244,
      },
      {
        post_id: 5,
        tag_id: 274,
      },
      {
        post_id: 5,
        tag_id: 235,
      },
      {
        post_id: 6,
        tag_id: 272,
      },
      {
        post_id: 6,
        tag_id: 37,
      },
      {
        post_id: 6,
        tag_id: 236,
      },
      {
        post_id: 6,
        tag_id: 280,
      },
      {
        post_id: 6,
        tag_id: 251,
      },
      {
        post_id: 6,
        tag_id: 208,
      },
      {
        post_id: 7,
        tag_id: 5,
      },
      {
        post_id: 7,
        tag_id: 41,
      },
      {
        post_id: 7,
        tag_id: 283,
      },
      {
        post_id: 7,
        tag_id: 131,
      },
      {
        post_id: 7,
        tag_id: 21,
      },
      {
        post_id: 8,
        tag_id: 41,
      },
      {
        post_id: 8,
        tag_id: 286,
      },
      {
        post_id: 8,
        tag_id: 288,
      },
      {
        post_id: 8,
        tag_id: 21,
      },
      {
        post_id: 8,
        tag_id: 130,
      },
      {
        post_id: 9,
        tag_id: 96,
      },
      {
        post_id: 9,
        tag_id: 284,
      },
      {
        post_id: 9,
        tag_id: 22,
      },
      {
        post_id: 9,
        tag_id: 64,
      },
      {
        post_id: 10,
        tag_id: 89,
      },
      {
        post_id: 10,
        tag_id: 95,
      },
      {
        post_id: 10,
        tag_id: 156,
      },
      {
        post_id: 11,
        tag_id: 193,
      },
      {
        post_id: 11,
        tag_id: 156,
      },
      {
        post_id: 11,
        tag_id: 265,
      },
      {
        post_id: 12,
        tag_id: 24,
      },
      {
        post_id: 12,
        tag_id: 65,
      },
      {
        post_id: 12,
        tag_id: 26,
      },
      {
        post_id: 13,
        tag_id: 157,
      },
      {
        post_id: 14,
        tag_id: 273,
      },
      {
        post_id: 14,
        tag_id: 155,
      },
      {
        post_id: 14,
        tag_id: 106,
      },
      {
        post_id: 15,
        tag_id: 82,
      },
      {
        post_id: 15,
        tag_id: 43,
      },
      {
        post_id: 15,
        tag_id: 115,
      },
      {
        post_id: 16,
        tag_id: 275,
      },
      {
        post_id: 17,
        tag_id: 123,
      },
      {
        post_id: 17,
        tag_id: 121,
      },
      {
        post_id: 17,
        tag_id: 125,
      },
      {
        post_id: 17,
        tag_id: 124,
      },
      {
        post_id: 18,
        tag_id: 160,
      },
      {
        post_id: 18,
        tag_id: 122,
      },
      {
        post_id: 18,
        tag_id: 19,
      },
      {
        post_id: 18,
        tag_id: 20,
      },
      {
        post_id: 19,
        tag_id: 271,
      },
      {
        post_id: 19,
        tag_id: 158,
      },
      {
        post_id: 19,
        tag_id: 81,
      },
      {
        post_id: 19,
        tag_id: 80,
      },
      {
        post_id: 19,
        tag_id: 159,
      },
      {
        post_id: 20,
        tag_id: 44,
      },
      {
        post_id: 20,
        tag_id: 127,
      },
      {
        post_id: 21,
        tag_id: 55,
      },
      {
        post_id: 21,
        tag_id: 14,
      },
      {
        post_id: 21,
        tag_id: 46,
      },
      {
        post_id: 21,
        tag_id: 100,
      },
      {
        post_id: 22,
        tag_id: 55,
      },
      {
        post_id: 22,
        tag_id: 14,
      },
      {
        post_id: 22,
        tag_id: 77,
      },
      {
        post_id: 22,
        tag_id: 100,
      },
      {
        post_id: 23,
        tag_id: 52,
      },
      {
        post_id: 23,
        tag_id: 17,
      },
      {
        post_id: 24,
        tag_id: 282,
      },
      {
        post_id: 24,
        tag_id: 47,
      },
      {
        post_id: 24,
        tag_id: 276,
      },
      {
        post_id: 24,
        tag_id: 36,
      },
      {
        post_id: 24,
        tag_id: 62,
      },
      {
        post_id: 25,
        tag_id: 173,
      },
      {
        post_id: 25,
        tag_id: 42,
      },
      {
        post_id: 25,
        tag_id: 242,
      },
      {
        post_id: 26,
        tag_id: 255,
      },
      {
        post_id: 26,
        tag_id: 42,
      },
      {
        post_id: 26,
        tag_id: 242,
      },
      {
        post_id: 27,
        tag_id: 71,
      },
      {
        post_id: 27,
        tag_id: 18,
      },
      {
        post_id: 27,
        tag_id: 39,
      },
      {
        post_id: 28,
        tag_id: 277,
      },
      {
        post_id: 28,
        tag_id: 170,
      },
      {
        post_id: 28,
        tag_id: 133,
      },
      {
        post_id: 29,
        tag_id: 246,
      },
      {
        post_id: 29,
        tag_id: 161,
      },
      {
        post_id: 29,
        tag_id: 230,
      },
      {
        post_id: 29,
        tag_id: 74,
      },
      {
        post_id: 29,
        tag_id: 75,
      },
      {
        post_id: 29,
        tag_id: 262,
      },
      {
        post_id: 30,
        tag_id: 41,
      },
      {
        post_id: 30,
        tag_id: 170,
      },
      {
        post_id: 31,
        tag_id: 68,
      },
      {
        post_id: 31,
        tag_id: 142,
      },
      {
        post_id: 31,
        tag_id: 232,
      },
      {
        post_id: 31,
        tag_id: 154,
      },
      {
        post_id: 31,
        tag_id: 137,
      },
      {
        post_id: 31,
        tag_id: 151,
      },
      {
        post_id: 32,
        tag_id: 187,
      },
      {
        post_id: 32,
        tag_id: 154,
      },
      {
        post_id: 32,
        tag_id: 267,
      },
      {
        post_id: 33,
        tag_id: 215,
      },
      {
        post_id: 34,
        tag_id: 162,
      },
      {
        post_id: 34,
        tag_id: 266,
      },
      {
        post_id: 34,
        tag_id: 287,
      },
      {
        post_id: 34,
        tag_id: 197,
      },
      {
        post_id: 34,
        tag_id: 225,
      },
      {
        post_id: 35,
        tag_id: 25,
      },
      {
        post_id: 35,
        tag_id: 147,
      },
      {
        post_id: 35,
        tag_id: 88,
      },
      {
        post_id: 35,
        tag_id: 117,
      },
      {
        post_id: 35,
        tag_id: 216,
      },
      {
        post_id: 36,
        tag_id: 114,
      },
      {
        post_id: 36,
        tag_id: 279,
      },
      {
        post_id: 36,
        tag_id: 194,
      },
      {
        post_id: 37,
        tag_id: 285,
      },
      {
        post_id: 37,
        tag_id: 32,
      },
      {
        post_id: 37,
        tag_id: 63,
      },
      {
        post_id: 38,
        tag_id: 25,
      },
      {
        post_id: 38,
        tag_id: 219,
      },
      {
        post_id: 38,
        tag_id: 195,
      },
      {
        post_id: 38,
        tag_id: 128,
      },
      {
        post_id: 38,
        tag_id: 27,
      },
      {
        post_id: 39,
        tag_id: 119,
      },
      {
        post_id: 39,
        tag_id: 171,
      },
      {
        post_id: 39,
        tag_id: 51,
      },
      {
        post_id: 39,
        tag_id: 34,
      },
      {
        post_id: 39,
        tag_id: 126,
      },
      {
        post_id: 40,
        tag_id: 94,
      },
      {
        post_id: 40,
        tag_id: 228,
      },
      {
        post_id: 40,
        tag_id: 229,
      },
      {
        post_id: 41,
        tag_id: 260,
      },
      {
        post_id: 41,
        tag_id: 259,
      },
      {
        post_id: 41,
        tag_id: 258,
      },
      {
        post_id: 41,
        tag_id: 261,
      },
      {
        post_id: 42,
        tag_id: 66,
      },
      {
        post_id: 42,
        tag_id: 264,
      },
      {
        post_id: 42,
        tag_id: 57,
      },
      {
        post_id: 42,
        tag_id: 116,
      },
      {
        post_id: 42,
        tag_id: 138,
      },
      {
        post_id: 43,
        tag_id: 186,
      },
      {
        post_id: 43,
        tag_id: 108,
      },
      {
        post_id: 43,
        tag_id: 149,
      },
      {
        post_id: 44,
        tag_id: 174,
      },
      {
        post_id: 44,
        tag_id: 180,
      },
      {
        post_id: 44,
        tag_id: 256,
      },
      {
        post_id: 45,
        tag_id: 226,
      },
      {
        post_id: 45,
        tag_id: 129,
      },
      {
        post_id: 45,
        tag_id: 238,
      },
      {
        post_id: 46,
        tag_id: 247,
      },
      {
        post_id: 46,
        tag_id: 190,
      },
      {
        post_id: 46,
        tag_id: 189,
      },
      {
        post_id: 47,
        tag_id: 146,
      },
      {
        post_id: 47,
        tag_id: 179,
      },
      {
        post_id: 47,
        tag_id: 200,
      },
      {
        post_id: 48,
        tag_id: 145,
      },
      {
        post_id: 48,
        tag_id: 220,
      },
      {
        post_id: 48,
        tag_id: 221,
      },
      {
        post_id: 49,
        tag_id: 41,
      },
      {
        post_id: 49,
        tag_id: 96,
      },
      {
        post_id: 49,
        tag_id: 28,
      },
      {
        post_id: 49,
        tag_id: 253,
      },
      {
        post_id: 49,
        tag_id: 164,
      },
      {
        post_id: 49,
        tag_id: 254,
      },
      {
        post_id: 50,
        tag_id: 248,
      },
      {
        post_id: 50,
        tag_id: 269,
      },
      {
        post_id: 50,
        tag_id: 101,
      },
      {
        post_id: 51,
        tag_id: 239,
      },
      {
        post_id: 51,
        tag_id: 201,
      },
      {
        post_id: 51,
        tag_id: 23,
      },
      {
        post_id: 52,
        tag_id: 143,
      },
      {
        post_id: 52,
        tag_id: 192,
      },
      {
        post_id: 52,
        tag_id: 132,
      },
      {
        post_id: 53,
        tag_id: 143,
      },
      {
        post_id: 53,
        tag_id: 83,
      },
      {
        post_id: 53,
        tag_id: 11,
      },
      {
        post_id: 53,
        tag_id: 12,
      },
      {
        post_id: 54,
        tag_id: 110,
      },
      {
        post_id: 54,
        tag_id: 206,
      },
      {
        post_id: 55,
        tag_id: 210,
      },
      {
        post_id: 55,
        tag_id: 101,
      },
      {
        post_id: 55,
        tag_id: 13,
      },
      {
        post_id: 56,
        tag_id: 141,
      },
      {
        post_id: 56,
        tag_id: 227,
      },
      {
        post_id: 56,
        tag_id: 231,
      },
      {
        post_id: 56,
        tag_id: 148,
      },
      {
        post_id: 57,
        tag_id: 166,
      },
      {
        post_id: 57,
        tag_id: 167,
      },
      {
        post_id: 57,
        tag_id: 168,
      },
      {
        post_id: 57,
        tag_id: 67,
      },
      {
        post_id: 57,
        tag_id: 90,
      },
      {
        post_id: 58,
        tag_id: 68,
      },
      {
        post_id: 58,
        tag_id: 227,
      },
      {
        post_id: 58,
        tag_id: 224,
      },
      {
        post_id: 58,
        tag_id: 134,
      },
      {
        post_id: 59,
        tag_id: 107,
      },
      {
        post_id: 59,
        tag_id: 223,
      },
      {
        post_id: 59,
        tag_id: 1,
      },
      {
        post_id: 59,
        tag_id: 185,
      },
      {
        post_id: 60,
        tag_id: 107,
      },
      {
        post_id: 60,
        tag_id: 203,
      },
      {
        post_id: 60,
        tag_id: 237,
      },
      {
        post_id: 60,
        tag_id: 278,
      },
      {
        post_id: 60,
        tag_id: 184,
      },
      {
        post_id: 61,
        tag_id: 41,
      },
      {
        post_id: 61,
        tag_id: 248,
      },
      {
        post_id: 61,
        tag_id: 188,
      },
      {
        post_id: 61,
        tag_id: 204,
      },
      {
        post_id: 61,
        tag_id: 153,
      },
      {
        post_id: 61,
        tag_id: 207,
      },
      {
        post_id: 62,
        tag_id: 243,
      },
      {
        post_id: 62,
        tag_id: 198,
      },
      {
        post_id: 62,
        tag_id: 281,
      },
      {
        post_id: 63,
        tag_id: 41,
      },
      {
        post_id: 63,
        tag_id: 136,
      },
      {
        post_id: 63,
        tag_id: 196,
      },
      {
        post_id: 63,
        tag_id: 150,
      },
      {
        post_id: 63,
        tag_id: 240,
      },
      {
        post_id: 63,
        tag_id: 207,
      },
      {
        post_id: 64,
        tag_id: 241,
      },
      {
        post_id: 64,
        tag_id: 181,
      },
      {
        post_id: 64,
        tag_id: 245,
      },
      {
        post_id: 64,
        tag_id: 205,
      },
      {
        post_id: 64,
        tag_id: 199,
      },
      {
        post_id: 64,
        tag_id: 207,
      },
      {
        post_id: 64,
        tag_id: 222,
      },
      {
        post_id: 65,
        tag_id: 191,
      },
      {
        post_id: 65,
        tag_id: 202,
      },
      {
        post_id: 65,
        tag_id: 163,
      },
      {
        post_id: 66,
        tag_id: 30,
      },
      {
        post_id: 66,
        tag_id: 8,
      },
      {
        post_id: 66,
        tag_id: 76,
      },
      {
        post_id: 66,
        tag_id: 15,
      },
      {
        post_id: 66,
        tag_id: 31,
      },
      {
        post_id: 67,
        tag_id: 135,
      },
      {
        post_id: 67,
        tag_id: 120,
      },
      {
        post_id: 67,
        tag_id: 111,
      },
      {
        post_id: 67,
        tag_id: 290,
      },
      {
        post_id: 68,
        tag_id: 56,
      },
      {
        post_id: 68,
        tag_id: 183,
      },
      {
        post_id: 68,
        tag_id: 59,
      },
      {
        post_id: 68,
        tag_id: 118,
      },
      {
        post_id: 69,
        tag_id: 99,
      },
      {
        post_id: 69,
        tag_id: 102,
      },
      {
        post_id: 69,
        tag_id: 10,
      },
      {
        post_id: 69,
        tag_id: 103,
      },
      {
        post_id: 70,
        tag_id: 3,
      },
      {
        post_id: 70,
        tag_id: 177,
      },
      {
        post_id: 70,
        tag_id: 178,
      },
      {
        post_id: 70,
        tag_id: 175,
      },
      {
        post_id: 70,
        tag_id: 176,
      },
      {
        post_id: 71,
        tag_id: 68,
      },
      {
        post_id: 71,
        tag_id: 107,
      },
      {
        post_id: 71,
        tag_id: 102,
      },
      {
        post_id: 71,
        tag_id: 289,
      },
      {
        post_id: 72,
        tag_id: 3,
      },
      {
        post_id: 72,
        tag_id: 4,
      },
      {
        post_id: 73,
        tag_id: 204,
      },
      {
        post_id: 73,
        tag_id: 214,
      },
      {
        post_id: 73,
        tag_id: 212,
      },
      {
        post_id: 73,
        tag_id: 213,
      },
      {
        post_id: 74,
        tag_id: 172,
      },
      {
        post_id: 74,
        tag_id: 218,
      },
      {
        post_id: 74,
        tag_id: 7,
      },
      {
        post_id: 74,
        tag_id: 85,
      },
      {
        post_id: 75,
        tag_id: 40,
      },
      {
        post_id: 75,
        tag_id: 69,
      },
      {
        post_id: 76,
        tag_id: 109,
      },
      {
        post_id: 76,
        tag_id: 9,
      },
      {
        post_id: 76,
        tag_id: 48,
      },
      {
        post_id: 76,
        tag_id: 2,
      },
      {
        post_id: 76,
        tag_id: 92,
      },
      {
        post_id: 76,
        tag_id: 49,
      },
      {
        post_id: 76,
        tag_id: 84,
      },
      {
        post_id: 76,
        tag_id: 7,
      },
      {
        post_id: 76,
        tag_id: 97,
      },
      {
        post_id: 77,
        tag_id: 268,
      },
      {
        post_id: 77,
        tag_id: 73,
      },
      {
        post_id: 78,
        tag_id: 96,
      },
      {
        post_id: 78,
        tag_id: 165,
      },
      {
        post_id: 78,
        tag_id: 263,
      },
      {
        post_id: 78,
        tag_id: 60,
      },
      {
        post_id: 79,
        tag_id: 239,
      },
      {
        post_id: 79,
        tag_id: 201,
      },
      {
        post_id: 79,
        tag_id: 23,
      },
      {
        post_id: 80,
        tag_id: 113,
      },
      {
        post_id: 80,
        tag_id: 58,
      },
      {
        post_id: 80,
        tag_id: 257,
      },
      {
        post_id: 80,
        tag_id: 112,
      },
      {
        post_id: 80,
        tag_id: 234,
      },
      {
        post_id: 81,
        tag_id: 96,
      },
      {
        post_id: 81,
        tag_id: 60,
      },
      {
        post_id: 81,
        tag_id: 165,
      },
      {
        post_id: 82,
        tag_id: 96,
      },
      {
        post_id: 82,
        tag_id: 165,
      },
      {
        post_id: 82,
        tag_id: 140,
      },
      {
        post_id: 82,
        tag_id: 139,
      },
      {
        post_id: 83,
        tag_id: 96,
      },
      {
        post_id: 83,
        tag_id: 182,
      },
      {
        post_id: 83,
        tag_id: 152,
      },
      {
        post_id: 83,
        tag_id: 165,
      },
      {
        post_id: 84,
        tag_id: 96,
      },
      {
        post_id: 84,
        tag_id: 165,
      },
      {
        post_id: 84,
        tag_id: 211,
      },
      {
        post_id: 84,
        tag_id: 252,
      },
      {
        post_id: 85,
        tag_id: 78,
      },
      {
        post_id: 85,
        tag_id: 16,
      },
      {
        post_id: 85,
        tag_id: 6,
      },
      {
        post_id: 85,
        tag_id: 35,
      },
      {
        post_id: 85,
        tag_id: 50,
      },
      {
        post_id: 85,
        tag_id: 98,
      },
      {
        post_id: 86,
        tag_id: 29,
      },
      {
        post_id: 87,
        tag_id: 61,
      },
      {
        post_id: 87,
        tag_id: 105,
      },
      {
        post_id: 87,
        tag_id: 104,
      },
      {
        post_id: 87,
        tag_id: 91,
      },
      {
        post_id: 88,
        tag_id: 270,
      },
      {
        post_id: 88,
        tag_id: 54,
      },
      {
        post_id: 88,
        tag_id: 70,
      },
    ];

    items.forEach((item) => {
      item.createdAt = Sequelize.literal("NOW()");
      item.updatedAt = Sequelize.literal("NOW()");
    });
    await queryInterface.bulkInsert("PostTags", items, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("PostTags", null, {});
  },
};
