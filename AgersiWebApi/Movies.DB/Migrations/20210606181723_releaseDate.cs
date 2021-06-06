using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace Movies.DB.Migrations
{
    public partial class releaseDate : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
         

            migrationBuilder.AddColumn<DateTime>(
                name: "releaseDate",
                table: "Movies",
                type: "datetime2",
                nullable: false,
                defaultValue: new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified));
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "releaseDate",
                table: "Movies");

           
        }
    }
}
