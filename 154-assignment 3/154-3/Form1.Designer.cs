
namespace _154_3
{
    partial class Form1
    {
        /// <summary>
        ///  Required designer variable.
        /// </summary>
        private System.ComponentModel.IContainer components = null;

        /// <summary>
        ///  Clean up any resources being used.
        /// </summary>
        /// <param name="disposing">true if managed resources should be disposed; otherwise, false.</param>
        protected override void Dispose(bool disposing)
        {
            if (disposing && (components != null))
            {
                components.Dispose();
            }
            base.Dispose(disposing);
        }

        #region Windows Form Designer generated code

        /// <summary>
        ///  Required method for Designer support - do not modify
        ///  the contents of this method with the code editor.
        /// </summary>
        private void InitializeComponent()
        {
            this.linkedList = new System.Windows.Forms.GroupBox();
            this.SuspendLayout();
            // 
            // linkedList
            // 
            this.linkedList.BackColor = System.Drawing.SystemColors.ScrollBar;
            this.linkedList.Location = new System.Drawing.Point(13, 13);
            this.linkedList.Name = "linkedList";
            this.linkedList.Size = new System.Drawing.Size(200, 100);
            this.linkedList.TabIndex = 0;
            this.linkedList.TabStop = false;
            this.linkedList.Text = "Linked List";
            this.linkedList.Enter += new System.EventHandler(this.groupBox1_Enter);
            // 
            // Form1
            // 
            this.AutoScaleDimensions = new System.Drawing.SizeF(7F, 15F);
            this.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font;
            this.BackColor = System.Drawing.SystemColors.HotTrack;
            this.ClientSize = new System.Drawing.Size(800, 450);
            this.Controls.Add(this.linkedList);
            this.Name = "Form1";
            this.Text = "ITDEV154 - Assignment 3 - Samuel Zaniewski";
            this.ResumeLayout(false);

        }

        #endregion

        private System.Windows.Forms.GroupBox linkedList;
    }
}

