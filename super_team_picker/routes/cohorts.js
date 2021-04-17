const express = require("express");
const knex = require("../db/client");

const router = express.Router();


//cohorts page
router.get("/", (req, res) => {
    knex
        .select("*")
        .orderBy('id',"desc")
        .from("cohorts")
        .then(cohorts => {
            res.render("cohorts/index", {
                cohorts: cohorts
            });
        });
});

// new cohort page
router.get("/new", (req, res) => {
    res.render("cohorts/new");
});

// new cohorts submit button
router.post("/", (req, res) => {
    knex("cohorts")
        .insert({
                logoURL: req.body.logoURL,
                name: req.body.name,
                members: req.body.members
            },
            "*"
        )
        .then(cohorts => {
            const [cohort] = cohorts;
            res.redirect(`cohorts/${cohort.id}`);
        });
});

// individual cohort show
router.get("/:id", (req, res) => {
    const id = req.params.id;
    knex("cohorts")
        .where("id", id)
        .first()
        .then(cohort => {
            if (cohort) {
                if (req.query.method && req.query.quantity) {
                    let method = req.query.method;
                    let quantity = req.query.quantity;
                    const members = cohort.members;
                    const memberArr = members.split(',');
                    let shuffleArr = memberArr.sort(function(a,b) {
                        return 0.5 - Math.random();
                    });
                    let outputArr = [];
                    if (method === "teamCount") {
                        for (let i = quantity; i > 0; i--) {
                            outputArr.push(shuffleArr.splice(0, Math.ceil(shuffleArr.length/i)));
                        }
                        return outputArr;
                    } else if (method === "numberPerTeam") {
                        while (shuffleArr.length !== 0) {
                            outputArr.push(shuffleArr.splice(0, quantity));
                        }
                        return outputArr;
                    }
                }
                res.render("cohorts/show", {
                    cohort: cohort
                })
            } else {
                res.redirect("/cohorts");
            }
        });
});

//edit page
router.get("/:id/edit", (req, res) => {
    knex("cohorts")
        .where("id", req.params.id)
        .first()
        .then(cohort => {
            res.render("cohorts/edit", { cohort: cohort });
        });
});

//edit submit button
router.patch("/:id", (req, res) => {
    const updatedCohort = {
        logoURL: req.body.logoURL,
        name: req.body.name,
        members: req.body.members
    };
    knex("cohorts")
        .where("id", req.params.id)
        .update(updatedCohort)
        .then(() => {
            res.redirect(`/cohorts/${req.params.id}`);
        });
});

//delete button
router.delete("/:id", (req, res) => {
    knex("cohorts")
        .where("id", req.params.id)
        .del()
        .then(() => {
            res.redirect("/cohorts");
        });
});





module.exports = router;

