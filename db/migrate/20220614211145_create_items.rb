class CreateItems < ActiveRecord::Migration[7.0]
  def change
    create_table :items do |t|
      t.string :name
      t.integer :price
      t.text :description
      t.belongs_to :menu, null: false, foreign_key: true

      t.timestamps
    end
  end
end
