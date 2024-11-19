import { relations, SQL, sql } from "drizzle-orm";
import {
    AnyPgColumn,
    index,
    integer,
    pgTable,
    primaryKey,
    text,
    timestamp,
    unique,
    uniqueIndex,
    varchar,
} from "drizzle-orm/pg-core";
import { nanoid } from "nanoid";

export function lower(email: AnyPgColumn): SQL {
    return sql`lower(${email})`;
}


export const user = pgTable("user", {
    id: varchar("id", { length: 12 })
        .primaryKey()
        .$defaultFn(() => nanoid(12)),
    username: varchar("username", { length: 255 }).notNull(),
    email: varchar("email", { length: 255 }).notNull(),
    password: varchar("password").notNull(),
    number: integer("number").notNull(),
    image: varchar("image", { length: 255 }),
    verificationOTP: integer("verification_otp")
        .$defaultFn(() => {
            return Math.floor(Math.random() * 9999)
        }),
    createdAt: timestamp("created_at", { withTimezone: true })
        .default(sql`CURRENT_TIMESTAMP`)
        .notNull(),
    updatedAt: timestamp("updated_at", { withTimezone: true }).$onUpdate(
        () => new Date()
    ),
},
    (user) => ({
        numberIdx: index("number_idx").on(user.number),
        emailUniqueIndex: uniqueIndex('emailUniqueIndex').on(lower(user.email)),
    })
)

export const userRelations = relations(user, ({ many }) => ({
    address: many(address),
    favProd: many(favProd)
}))

export const favProd = pgTable("fav_product", {
    productId: varchar("product_id").references(() => product.id),
    userId: varchar("user_id").references(() => user.id)

},
    (favProd) => ({
        compound_PK: primaryKey({ columns: [favProd.productId, favProd.userId] })
    })
)

export const favProdRelation = relations(favProd, ({one})=>({
    userFavProd: one(user, {fields:[favProd.userId], references:[user.id]})
}))


export const address = pgTable("address", {
    id: varchar("id", { length: 12 })
        .primaryKey()
        .$defaultFn(() => nanoid(12)),
    userId: varchar("user_id").references(() => user.id),
    line1: varchar("line1", { length: 30 }).notNull(),
    line2: varchar("line2", { length: 30 }),
    city: varchar("city", { length: 20 }).notNull(),
    state: varchar("state", { length: 20 }).notNull(),
    pincode: integer("pincode").notNull(),
})

export const adressRelation = relations(address, ({ one }) => ({
    user: one(user, { fields: [address.userId], references: [user.id] })
}))

export const payment = pgTable("payment", {
    userId: varchar("user_id").references(() => user.id),
    upiId: varchar("upi_id")
},
    (payment) => ({
        paymentIdx: unique("payment_idx").on(payment.userId, payment.upiId)
    })
)

export const paymentRelations = relations(payment, ({ one }) => ({
    payment: one(user, { fields: [payment.userId], references: [user.id] })
}))

export const product = pgTable("product", {
    id: varchar("id", { length: 12 })
        .primaryKey()
        .$defaultFn(() => nanoid(12)),
    name: varchar("name", { length: 255 }),
    description: text("description"),
    price: integer("price"),
    categoryId: varchar("category_id").references(() => productCategory.id)
},
)

export const productRelations = relations(product, ({ many }) => ({
    productImageRelation: many(productImage),
    productCategoryRelation: many(productCategory)
}))

export const productImage = pgTable("product_image", {
    url: varchar("url"),
    productId: varchar("producd_id").references(() => product.id)
},
    (image) => ({
        compoundPK: primaryKey({ name: "image_compoundPK", columns: [image.productId, image.url] })
    })
)

export const productImageRelations = relations(productImage, ({ one }) => ({
    productImageRelation: one(product, { fields: [productImage.productId], references: [product.id] })
}))

export const productCategory = pgTable("product_category", {
    id: varchar("id", { length: 12 })
        .primaryKey()
        .$defaultFn(() => nanoid(12)),
    name: varchar("name", { length: 255 }).unique(),
})

export const productCategoryRelations = relations(productCategory, ({ many }) => ({
    productRelation: many(product)
}))

